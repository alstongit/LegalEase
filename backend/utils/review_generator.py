import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()  # loads the .env file

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-pro")


def generate_review(fair_clauses: list[str], unfair_clauses: list[str]) -> dict:
    fair_text = "\n".join(fair_clauses)
    unfair_text = "\n".join(unfair_clauses)

    prompt = f"""
      You are a legal contract review assistant. Based on the following contract clauses, provide:

      1. A short and neutral **summary of the entire document**.
      2. A **review of potentially unfair clauses**, listing problems and improvements.
      3. **Suggestions for better terms**.

      ### Fair Clauses:
      {fair_text}

      ### Unfair Clauses:
      {unfair_text}

      Return the response as:

      Document Summary:
      ...

      Review Summary:
      ...
      """

    response = model.generate_content(prompt)

    if not response.text:
        raise ValueError("Gemini returned no text.")

    parts = response.text.split("Review Summary:")
    doc_summary = parts[0].replace("Document Summary:", "").strip()
    review_summary = parts[1].strip() if len(parts) > 1 else "No review found."

    return {
        "doc_summary": doc_summary,
        "review_summary": review_summary
    }
