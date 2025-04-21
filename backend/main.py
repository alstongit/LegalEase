from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from dotenv import load_dotenv
load_dotenv()
from utils.clause_splitter import split_into_clauses
from fastapi import Request
from pydantic import BaseModel
from typing import List
from utils.review_generator import generate_review

from utils.pdf_extractor import extract_text_from_pdf
from utils.clause_classifier import ClauseClassifier  # NEW import

from fastapi.responses import FileResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import textwrap

app = FastAPI()

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
MODEL_PATH = "./distilBert_Alston_95"  # or full path if needed

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load model once
classifier = ClauseClassifier(MODEL_PATH)

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Step 1: Extract text
    text = extract_text_from_pdf(file_path)

    # Step 2: Split into clauses using Gemini
    clauses = split_into_clauses(text)

    # Step 3: Predict
    predictions = classifier.predict(clauses)

    # Step 4: Separate fair and unfair
    fair_clauses = [p["clause"] for p in predictions if p["label"] == "fair"]
    unfair_clauses = [p["clause"] for p in predictions if p["label"] != "fair"]

    # Step 5: Generate review + summary
    review_data = generate_review(fair_clauses, unfair_clauses)

    # Step 6: Return all data
    return {
        "filename": file.filename,
        "total_clauses": len(clauses),
        "predictions": predictions,
        "doc_summary": review_data["doc_summary"],
        "review_summary": review_data["review_summary"],
        "fair_clauses": fair_clauses,
        "unfair_clauses": unfair_clauses,
    }




@app.post("/generate-pdf/")
async def generate_pdf(request: Request):
    data = await request.json()
    filename = os.path.join("uploads", "report.pdf")
    c = canvas.Canvas(filename, pagesize=letter)
    width, height = letter
    y = height - 40  # Start near the top of the page

    def check_page_space(c, y, line_height=15):
        """Check if there's enough space on the current page, and create a new page if needed."""
        if y < 40:  # If near the bottom of the page
            c.showPage()  # Create a new page
            c.setFont("Helvetica", 11)  # Reset font
            return height - 40  # Reset y to the top of the new page
        return y

    # Title Section
    c.setFont("Helvetica-Bold", 14)
    c.drawString(30, y, "Contract Analysis Report")
    y -= 30

    # Metadata Section
    c.setFont("Helvetica", 12)
    c.drawString(30, y, f"Filename: {data['filename']}")
    y -= 20
    c.drawString(30, y, f"Total Clauses: {data['total_clauses']}")
    y -= 30

    # Document Summary Section
    c.setFont("Helvetica-Bold", 13)
    c.drawString(30, y, "Document Summary:")
    y -= 20
    c.setFont("Helvetica", 11)
    for line in data["doc_summary"].split("\n"):
        wrapped_lines = textwrap.wrap(line.strip(), width=90)
        for wrapped_line in wrapped_lines:
            c.drawString(30, y, wrapped_line)
            y -= 15
            y = check_page_space(c, y)

    y -= 10

    # Review Summary Section
    c.setFont("Helvetica-Bold", 13)
    c.drawString(30, y, "Review Summary:")
    y -= 20
    c.setFont("Helvetica", 11)
    for line in data["review_summary"].split("\n"):
        wrapped_lines = textwrap.wrap(line.strip(), width=90)
        for wrapped_line in wrapped_lines:
            c.drawString(30, y, wrapped_line)
            y -= 15
            y = check_page_space(c, y)

    y -= 10

    # Fair Clauses Section
    c.setFont("Helvetica-Bold", 13)
    c.drawString(30, y, "Fair Clauses:")
    y -= 20
    c.setFont("Helvetica", 11)
    for clause in data["fair_clauses"]:
        wrapped_lines = textwrap.wrap(clause.strip(), width=90)
        for wrapped_line in wrapped_lines:
            c.drawString(30, y, wrapped_line)
            y -= 15
            y = check_page_space(c, y)
        y -= 10  # Add extra space between clauses
        y = check_page_space(c, y)

    y -= 10

    # Unfair Clauses Section
    c.setFont("Helvetica-Bold", 13)
    c.drawString(30, y, "Unfair Clauses:")
    y -= 20
    c.setFont("Helvetica", 11)
    for clause in data["unfair_clauses"]:
        wrapped_lines = textwrap.wrap(clause.strip(), width=90)
        for wrapped_line in wrapped_lines:
            c.drawString(30, y, wrapped_line)
            y -= 15
            y = check_page_space(c, y)
        y -= 10  # Add extra space between clauses
        y = check_page_space(c, y)

    c.save()
    return FileResponse(path=filename, filename="Contract_Report.pdf", media_type='application/pdf')

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
