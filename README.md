# 📄 LegalEase — AI-Powered Legal Document Analyzer & Generator

LegalEase is a full-stack web application that empowers users to upload, analyze, and generate legal documents. It uses AI to detect unfair clauses, provides a chatbot for legal queries, and dynamically generates documents like rent agreements.

---

## 🚀 Features

- 🔍 **AI-Powered Clause Analyzer**  
  Upload a contract (PDF/DOCX) to identify **fair and unfair clauses** using a custom-trained LegalBERT model.

- 💬 **Legal Chatbot (RAG + Mistral)**  
  Ask legal questions based on your uploaded document using a retrieval-augmented chatbot powered by **Mistral AI** and **LangChain**.

- 🧠 **Document Generator (Rent Agreement)**  
  Fill out a form and instantly generate a **rent agreement** as a `.docx` (and optionally PDF).

- 📥 **Downloadable Reports**  
  Generate and download a complete report for your uploaded contract or created document.

---

## 🛠️ Tech Stack

### Frontend:
- React + Vite + Tailwind CSS
- React Router
- Axios

### Backend:
- FastAPI
- LangChain + MistralAI
- python-docx-template
- FAISS for vector search

### ML/NLP:
- Custom fine-tuned LegalBERT model
- SentenceTransformers for embeddings
- RAG pipeline for chatbot

---

## 📁 Project Structure

```
project-root/
├── frontend/                # React frontend
│   ├── pages/               # Upload form, chatbot, generator UI
│   └── components/Ui/       # Navbar, Features, etc.
│
├── backend/                 # FastAPI backend
│   ├── main.py              # Entry point
│   ├── routes/              # Clause analyzer, generator, chatbot
│   ├── utils/               # Clause splitting, chatbot logic
│   └── RentalTemplate.docx  # DOCX template for rent agreement
```

---

## ⚙️ Setup Instructions

### 1. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

Create a `.env` file:

```env
MISTRAL_API_KEY=your-mistral-key
GEMINI_API_KEY=your-gemini-key
CLERK_PUBLISHABLE_KEY=your-clerk-key
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 How to Use

### 📑 Upload Contract
- Go to **Upload Page**
- Upload PDF/DOCX
- View clause classification and download summary report

### 💬 Chatbot
- Chat with an AI assistant about your uploaded contract
- Ask questions like "What is the arbitration clause?"

### 🧾 Rent Agreement Generator
- Go to **Document Generator**
- Choose "Rent Agreement"
- Fill the form and download the customized document

---

## 📌 Upcoming Features

- [ ] Employment/NDA template generators
- [ ] Version history for documents
- [ ] Multi-user session support
- [ ] Chatbot session memory

---

## 🧑‍💻 Author

**Alston Dsouza**  
