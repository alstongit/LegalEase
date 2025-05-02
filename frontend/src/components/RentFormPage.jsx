import { useState } from "react";

const RentFormPage = () => {
  const [formData, setFormData] = useState({
    place: "", date: "", month: "", year: "",

    owner_name: "", owner_parent_name: "", owner_address: "",

    tenant_name: "", tenant_parent_name: "", tenant_permanent_address: "", tenant_work_address: "",

    property_address: "", property_city: "", bhk: "", start_date: "", end_date: "",

    rent_amt: "", maintainence_charge: "", security_deposit: "",

    cheque_number: "", cheque_date: "",

    fans: "", lights: "", geysers: "", mirrors: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/generate-lease", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to generate document");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "RentAgreement.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      alert("Error generating document.");
      console.error(error);
    }
  };

  const Section = ({ title, fields }) => (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="p-2 border rounded bg-white text-black"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Generate Rent Agreement</h1>

      <Section
        title="Owner Information"
        fields={[
          { name: "owner_name", placeholder: "Owner Name" },
          { name: "owner_parent_name", placeholder: "Owner Parent Name" },
          { name: "owner_address", placeholder: "Owner Address" },
        ]}
      />

      <Section
        title="Tenant Information"
        fields={[
          { name: "tenant_name", placeholder: "Tenant Name" },
          { name: "tenant_parent_name", placeholder: "Tenant Parent Name" },
          { name: "tenant_permanent_address", placeholder: "Tenant Permanent Address" },
          { name: "tenant_work_address", placeholder: "Tenant Work Address" },
        ]}
      />

      <Section
        title="Property Information"
        fields={[
          { name: "place", placeholder: "Agreement Place" },
          { name: "date", placeholder: "Day" },
          { name: "month", placeholder: "Month" },
          { name: "year", placeholder: "Year" },
          { name: "property_address", placeholder: "Property Address" },
          { name: "property_city", placeholder: "Property City" },
          { name: "bhk", placeholder: "BHK (e.g. 2BHK)" },
          { name: "start_date", placeholder: "Lease Start Date" },
          { name: "end_date", placeholder: "Lease End Date" },
        ]}
      />

      <Section
        title="Payment Information"
        fields={[
          { name: "rent_amt", placeholder: "Rent Amount" },
          { name: "maintainence_charge", placeholder: "Maintenance Charge" },
          { name: "security_deposit", placeholder: "Security Deposit" },
          { name: "cheque_number", placeholder: "Cheque Number" },
          { name: "cheque_date", placeholder: "Cheque Date" },
        ]}
      />

      <Section
        title="Additional Details"
        fields={[
          { name: "fans", placeholder: "Number of Fans" },
          { name: "lights", placeholder: "Number of Lights" },
          { name: "geysers", placeholder: "Number of Geysers" },
          { name: "mirrors", placeholder: "Number of Mirrors" },
        ]}
      />

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-medium"
      >
        Generate Document
      </button>
    </div>
  );
};

export default RentFormPage;
