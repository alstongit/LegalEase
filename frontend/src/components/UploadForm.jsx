// UploadForm.jsx
import {useState } from "react";
import axios from "axios";
import DocumentSummary from "./DocumentSummary";
import ClauseList from "./ClauseList";
import ReviewSummary from "./ReviewSummary";
import DownloadReport from "./DownloadReport";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResults(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fairClauses = results?.predictions.filter(item => item.label === "fair") || [];
  const unfairClauses = results?.predictions.filter(item => item.label !== "fair") || [];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Upload a Contract (PDF)</h2>

      <input
        type="file"
        accept=".docx,.pdf"
        onChange={handleFileChange}
        className="mb-4 w-full p-2 border rounded"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            Uploading...
          </span>
        ) : (
          "Upload"
        )}
      </button>

      {results && (
        <>
          <div className="mt-8 space-y-8 report-wrapper" >
            <DocumentSummary
              results={results}
              fairCount={fairClauses.length}
              unfairCount={unfairClauses.length}
            />
            <ClauseList
              fairClauses={fairClauses}
              unfairClauses={unfairClauses}
            />
            <ReviewSummary review={results.review_summary} />
          </div>
          <DownloadReport results={results} />
        </>
      )}
    </div>
  );
};

export default UploadForm;
