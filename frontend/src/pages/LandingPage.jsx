import { Link } from "react-router-dom";
import Navbar from "../components/Ui/Navbar";
import FeaturesSection from "../components/Ui/Features";

import FooterSection from "../components/Ui/Footer";
import { CheckCircleIcon } from "lucide-react";





const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-44 px-6 md:px-8 lg:px-12 bg-gradient-to-t from-blue-50 to-white font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center pt-8 lg:pt-16">
              <div className="mb-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">AI-Powered Legal Analysis</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-gray-900 mb-6 leading-tight tracking-tight">
                Identify Unfair Clauses in Your Contracts
              </h1>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Our AI analyzes your legal documents to highlight potentially unfair terms, saving you time and protecting your interests.
              </p>
              <div className="flex flex-wrap gap-6 mb-12">
                <Link to="/analyze" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg flex items-center font-medium shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1">
                  Upload Contract
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a href="#howitworks" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-3.5 flex items-center transition-colors duration-200">
                  Learn More
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 -mt-8 flex-wrap">
                <div className="flex items-center gap-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  <span>Free trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>

            </div>
            
            {/* Right Content - Image */}
            <div className="flex items-center justify-center mt-20">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full h-full flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-[35rem] bg-gray-100 rounded-xl flex items-center justify-center">
                <img src="https://images.pexels.com/photos/5816283/pexels-photo-5816283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="Contract analysis illustration"className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/*Features Sections */}
      <div id="features">
      <FeaturesSection />
      </div>
      

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;