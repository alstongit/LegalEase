import nltk
import re
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# Download NLTK sentence tokenizer
nltk.download('punkt')

# Load the tokenizer and model (change path if needed)
MODEL_PATH = "./legalbert_unfair_clause_model"  # Update this to your local model path
tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)

def preprocess_text(text):
    """Cleans and prepares text for model input."""
    
    # 1. Remove extra spaces, new lines, and special characters
    text = re.sub(r'\s+', ' ', text)  # Normalize spaces
    text = re.sub(r"[^a-zA-Z0-9.,!?'-]", " ", text)  # Keep only relevant characters
    
    # 2. Split text into sentences
    sentences = nltk.sent_tokenize(text)
    
    return sentences

