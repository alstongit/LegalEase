const DocumentSummary = ({ results, fairCount, unfairCount }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">Document Summary</h3>
      <p className="mb-2">{results.doc_summary}</p>
      <p>Total Clauses: {results.total_clauses}</p>
      <p>Fair: {fairCount} | Unfair: {unfairCount}</p>
    </div>
  );
};

export default DocumentSummary;
