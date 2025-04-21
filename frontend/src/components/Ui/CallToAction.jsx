import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="bg-blue-500 text-white py-22 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Analyze Your Contracts?</h2>
      <p className="mb-8">Start identifying unfair clauses and protecting your interests today. No credit card required.</p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md font-medium">Upload Contract</button>
        <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium">Schedule Demo</button>
      </div>
    </div>
  );
};

export default CallToActionSection;