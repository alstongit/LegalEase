import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useUser, SignInButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleUploadClick = () => {
    if (isSignedIn) {
      navigate("/analyze");
    } else {
      // trigger sign-in modal manually if needed
      document.querySelector("#open-signin")?.click();
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center px-10 py-20 font-['Inter']">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="bg-gray-800 text-white px-3 py-1 rounded-full font-small w-fit">
            AI-Powered Legal Analysis
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Smart <span className="text-primary">Legal Document</span> Analysis and Generation
          </motion.h1>

          <p className="text-gray-400 text-lg max-w-xl">
            Our AI analyzes your legal documents to highlight potentially unfair terms,
            generates custom contracts, and predicts case outcomes.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            {/* Hidden SignInButton to open modal on demand */}
            <SignInButton mode="modal">
              <button id="open-signin" className="hidden" />
            </SignInButton>

            <button
              onClick={handleUploadClick}
              className=" cursor-pointer btn bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-lg px-6 py-3 flex items-center gap-2"
            >
              Upload Document <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <a className="btn btn-ghost px-6 text-white border border-gray-700 rounded-lg scroll-smooth vertical-center flex items-center gap-2" href="#features">
              Learn More
            </a>
          </div>

          {/* Guarantees */}
          <div className="flex gap-6 pt-6 flex-wrap text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-500" />
              Free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-500" />
              No credit card
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-500" />
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-96 h-96 bg-gradient-radial from-white via-gray-100 to-transparent rounded-full opacity-60" />
          </div>

          <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gavel"
              className="w-200 h-[400px] object-cover mt-8 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
