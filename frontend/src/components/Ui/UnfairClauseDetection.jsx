import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const UnfairClauseDetection = () => {
  const featureItems = [
    "Automatic identification of one-sided clauses",
    "Risk assessment with confidence scores",
    "Plain language explanations of legal implications",
    "Suggestions for fairer alternative language"
  ];

  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isSignedIn) {
      navigate("/analyze");
    } else {
      openSignIn();
    }
  };

  return (
    <section className="py-16 font-['Inter']">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-12">
          <motion.div
            className="mb-8 max-w-2xl lg:mb-0 lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              AI-Powered Unfair Clause Detection
            </h2>
            <p className="mb-8 text-gray-400 text-lg">
              Our advanced machine learning algorithms analyze legal documents to
              identify potentially unfair clauses that might put you at a disadvantage.
            </p>
            <ul className="mb-8 space-y-4">
              {featureItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button
                onClick={handleButtonClick}
                className="cursor-pointer bg-white font-semibold text-black hover:bg-gray-200 px-4 py-2 rounded"
              >
                Try Clause Detection
              </button>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Office desk with computer"
              className="w-[650px] h-[400px] rounded-xl ml-2 mx-auto ml-10 mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnfairClauseDetection;
