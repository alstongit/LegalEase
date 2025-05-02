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
    At the end of every clause add a /end.

    Also dont return any extra text. Just do what is told.
    TEXT:
    {text}

    Output as:
    1. First clause here./end
    2. Second clause here./end
    3. Third clause here./end
    ...
    """
    model = genai.GenerativeModel("gemini-1.5-pro")
    response = model.generate_content(prompt)

    print(response)

    # Clean and return lines as clause list
    raw_output = response.text.strip()
    print(raw_output)
    clauses = [clause.strip() for clause in raw_output.split('/end') if clause.strip()]
    print(clauses)
    return clauses
