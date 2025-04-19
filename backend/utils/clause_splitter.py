# utils/clause_splitter.py
import google.generativeai as genai
import os
from dotenv import load_dotenv
load_dotenv()


genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def split_into_clauses(text):
    prompt = f"""
    You are a legal assistant. Extract well-defined, concise clauses from the following rental agreement text. Each clause should be numbered and separated clearly.
    Dont change the clauses. Keep it as it is in the original doc.
    Also dont return any extra text. Just do what is told.
    TEXT:
    {text}

    Output as:
    1. First clause here.
    2. Second clause here.
    ...
    """
    model = genai.GenerativeModel("gemini-1.5-pro")
    response = model.generate_content(prompt)

    # Clean and return lines as clause list
    raw_output = response.text.strip()
    clauses = [clause.strip() for clause in raw_output.split('\n') if clause.strip()]
    return clauses
