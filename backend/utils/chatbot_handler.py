import os
from dotenv import load_dotenv
from langchain_mistralai.chat_models import ChatMistralAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

load_dotenv()

# Load Mistral API key from environment
MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")
if not MISTRAL_API_KEY:
    raise ValueError("MISTRAL_API_KEY is not set in the environment.")

# Prompt template for legal clause Q&A
prompt_template = PromptTemplate(
    input_variables=["question", "context"],
    template="""
You are a helpful legal assistant. Answer the user's question using only the provided context from a legal document.

Context:
{context}

Question:
{question}

Answer in a clear and professional tone. If the answer is not in the context, respond with "The document does not provide that information."
"""
)

# Load vector store from FAISS index
def load_vector_store(path: str = "faiss_index"):
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    return FAISS.load_local(path, embeddings, allow_dangerous_deserialization=True)

# Initialize LLMChain with prompt
def get_llm_chain():
    llm = ChatMistralAI(
        model="mistral-small",
        temperature=0.3,
        api_key=MISTRAL_API_KEY
    )
    return LLMChain(llm=llm, prompt=prompt_template)

# Generate chat response
def get_chat_response(query: str) -> str:
    db = load_vector_store()
    retriever = db.as_retriever(search_kwargs={"k": 4})
    docs = retriever.get_relevant_documents(query)
    context = "\n\n".join([doc.page_content for doc in docs])
    chain = get_llm_chain()
    return chain.run({"question": query, "context": context})
