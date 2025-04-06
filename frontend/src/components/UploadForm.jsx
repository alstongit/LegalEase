import { useState } from "react";
import axios from "axios";

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

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload a Contract (PDF)</h2>
      
      <input type="file" accept=".docx" onChange={handleFileChange} className="mb-4 w-full p-2 border rounded" />
      
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </button>

      {results && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Analysis Results:</h3>
          <ul className="mt-2">
            {results.predictions.map((item, index) => (
              <li key={index} className="border-b py-2">
                <strong>Clause:</strong> {item.sentence} <br />
                <strong>Unfair Probability:</strong> {item.unfair_probability}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
