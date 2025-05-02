from fastapi import APIRouter, Request
from pydantic import BaseModel
from docxtpl import DocxTemplate
from fastapi.responses import StreamingResponse
import io
import os

router = APIRouter()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_PATH = os.path.join(BASE_DIR, "..", "RentalTemplate.docx") 

class LeaseData(BaseModel):
    place: str
    date: str
    month: str
    year: str
    owner_name: str
    owner_parent_name: str
    owner_address: str
    tenant_name: str
    tenant_parent_name: str
    tenant_permanent_address: str
    tenant_work_address: str
    property_address: str
    start_date: str
    end_date: str
    rent_amt: str
    maintainence_charge: str
    security_deposit: str
    cheque_number: str
    cheque_date: str
    property_city: str
    bhk: str
    fans: str
    lights: str
    geysers: str
    mirrors: str

@router.post("/api/generate-lease")
def generate_rent_doc(data: LeaseData):
    doc = DocxTemplate(TEMPLATE_PATH)
    doc.render(data.model_dump())

    buf = io.BytesIO()
    doc.save(buf)
    buf.seek(0)

    return StreamingResponse(
        buf,
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers={"Content-Disposition": "attachment; filename=RentAgreement.docx"}
    )
