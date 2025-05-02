import { Link } from "react-router-dom";
import Navbar from "../components/Ui/Navbar";
import Features from "../components/Ui/Features";
import Hero from "../components/Ui/Hero";
import Footer from "../components/Ui/Footer";
import { CheckCircleIcon } from "lucide-react";


import { motion } from "framer-motion";
import UnfairClauseDetection from "../components/Ui/UnfairClauseDetection";
import DocumentGenerator from "../components/Ui/DocumentGen";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Features/>
      <div id="features">
        <UnfairClauseDetection  />
      </div>
      
      <DocumentGenerator/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
