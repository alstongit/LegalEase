from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from utils.pdf_extractor import extract_text_from_pdf
from utils.text_preprocessing import preprocess_text

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

    text = extract_text_from_pdf(file_path)
    clauses = preprocess_text(text)

    predictions = classifier.predict(clauses)

    return {
        "filename": file.filename,
        "total_clauses": len(clauses),
        "predictions": predictions
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
