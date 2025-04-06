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

def predict_unfair_clauses(sentences):
    """Pass sentences to the model and get predictions."""
    
    # Tokenize input text
    inputs = tokenizer(sentences, padding=True, truncation=True, max_length=512, return_tensors="pt")
    
    # Move model and inputs to GPU if available
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)
    inputs = {key: value.to(device) for key, value in inputs.items()}
    
    # Get model predictions
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Convert logits to class probabilities
    predictions = torch.softmax(outputs.logits, dim=1)
    unfair_probs = predictions[:, 1].tolist()  # Assuming class 1 is 'unfair'

    # Combine sentences with their unfair probability
    results = [{"sentence": sent, "unfair_probability": round(prob, 3)} for sent, prob in zip(sentences, unfair_probs)]
    
    return results
