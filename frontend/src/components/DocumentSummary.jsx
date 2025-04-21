const DocumentSummary = ({ results, fairCount, unfairCount }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Document Summary</h3>
      <p className="mb-2">{results.doc_summary}</p>
      <p className="text-gray-700 text-sm">Total Clauses: <span className="font-medium">{results.total_clauses}</span></p>
      <p className="text-gray-700 text-sm">Fair: <span className="text-green-600 font-medium">{fairCount}</span> | Unfair: <span className="text-red-600 font-medium">{unfairCount}</span></p>
    </div>
  );
};

export default DocumentSummary;
