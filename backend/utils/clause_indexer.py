from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.schema import Document

def create_vector_store_from_clauses(clauses: list[str], path: str = "faiss_index"):
    # Convert each clause into a LangChain Document
    docs = [Document(page_content=clause) for clause in clauses]

    # Use sentence transformer to embed
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

    # Create the FAISS vector store
    db = FAISS.from_documents(docs, embeddings)

    # Save to disk
    db.save_local(path)
    print(f"✅ FAISS vector store created and saved at: {path}")
