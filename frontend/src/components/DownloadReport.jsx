import React from "react";
import axios from "axios";

const DownloadReport = ({ results }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/generate-pdf/",
        results,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Contract_Report.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Failed to download PDF:", error);
      alert("Something went wrong while downloading the report.");
    }
  };

  return (
    <div className="mt-6 text-center">
      <button
        onClick={handleDownload}
        className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
      >
        Download PDF Report
      </button>
    </div>
  );
};

export default DownloadReport;
