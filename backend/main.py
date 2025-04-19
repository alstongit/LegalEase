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
    fair_clauses = [p["clause"] for p in predictions if p["label"] == "clearly_fair"]
    unfair_clauses = [p["clause"] for p in predictions if p["label"] != "clearly_fair"]

    # Step 5: Generate review + summary
    review_data = generate_review(fair_clauses, unfair_clauses)

    # Step 6: Return all data
    return {
        "filename": file.filename,
        "total_clauses": len(clauses),
        "predictions": predictions,
        "doc_summary": review_data["doc_summary"],
        "review_summary": review_data["review_summary"]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
