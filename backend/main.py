from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from utils.pdf_extractor import extract_text_from_pdf
from utils.text_preprocessing import preprocess_text, predict_unfair_clauses

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, change to ["http://localhost:5173"] for stricter security
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    """Handles PDF upload, extracts text, preprocesses it, and runs model inference."""
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_text_from_pdf(file_path)
    sentences = preprocess_text(extracted_text)
    predictions = predict_unfair_clauses(sentences)

    return {
        "filename": file.filename,
        "total_sentences": len(sentences),
        "predictions": predictions
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
