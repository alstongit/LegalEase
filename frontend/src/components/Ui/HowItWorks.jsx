import React from "react";

const HowItWorksSection = () => {
  return (
    <section id="howitworks" className="py-30 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Three simple steps to analyze your legal documents and identify unfair clauses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-semibold">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Upload Your Document</h3>
            <p className="text-gray-600 text-center">
              Simply upload your contract or legal document in PDF or Word format.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-semibold">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">AI Analysis</h3>
            <p className="text-gray-600 text-center">
              Our AI analyzes the document, identifying potentially unfair or concerning clauses.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-semibold">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Review Results</h3>
            <p className="text-gray-600 text-center">
              Receive a detailed report with highlighted clauses and recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;