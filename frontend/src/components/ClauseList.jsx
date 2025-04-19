const ClauseList = ({ fairClauses, unfairClauses }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Fair Clauses */}
      <div className="bg-green-50 p-4 rounded shadow">
        <h3 className="text-lg font-bold text-green-700 mb-2">Fair Clauses</h3>
        {fairClauses.map((item, index) => (
          <div key={index} className="mb-4 border-l-4 border-green-400 pl-3">
            <p className="text-sm">{item.clause}</p>
          </div>
        ))}
      </div>

      {/* Unfair Clauses */}
      <div className="bg-red-50 p-4 rounded shadow">
        <h3 className="text-lg font-bold text-red-700 mb-2">Unfair Clauses</h3>
        {unfairClauses.map((item, index) => (
          <div key={index} className="mb-4 border-l-4 border-red-400 pl-3">
            <p className="text-sm">{item.clause}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClauseList;
