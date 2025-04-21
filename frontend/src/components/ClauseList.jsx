const ClauseList = ({ fairClauses, unfairClauses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Fair Clauses */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
        <h3 className="text-xl font-bold text-green-800 mb-4">Fair Clauses</h3>
        {fairClauses.map((item, index) => (
          <div key={index} className="mb-4 border-l-4 border-green-500 pl-4">
            <p className="text-sm">{item.clause}</p>
          </div>
        ))}
      </div>

      {/* Unfair Clauses */}
      <div className="bg-red-50 p-6 rounded-lg shadow-md border border-red-200">
        <h3 className="text-xl font-bold text-red-800 mb-4">Unfair Clauses</h3>
        {unfairClauses.map((item, index) => (
          <div key={index} className="mb-4 border-l-4 border-red-500 pl-4">
            <p className="text-sm">{item.clause}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClauseList;
