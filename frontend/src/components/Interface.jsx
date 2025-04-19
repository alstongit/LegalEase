import React from "react";

const InterfaceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                Interface
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intuitive Analysis Dashboard
            </h2>
            <p className="text-gray-600 mb-8">
              Our user-friendly dashboard presents contract analysis in a clear, actionable format.
              Quickly identify problematic clauses and understand their implications.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Color-coded risk assessment for each clause</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Plain language explanations of legal terminology</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Suggested alternatives for unfair terms</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Export and share capabilities for team collaboration</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Preview */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8 w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Placeholder Dashboard UI */}
                <img src="https://cdn.pixabay.com/photo/2024/04/05/05/16/businesswoman-8676522_1280.jpg"alt="Dashboard preview"className="w-full h-full object-cover rounded-xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;