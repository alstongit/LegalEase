import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-8 py-5 bg-white z-50 flex justify-between items-center">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">LegalScan</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Features</a>
        <a href="#howitworks" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">How It Works</a>
        <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Testimonials</a>
        <Link to="/signin" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Sign In</Link>
        <Link to="/analyze" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md">
          Get Started
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;