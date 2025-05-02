// File: src/components/Features.jsx
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-16 font-['Inter'] bg-gradient-to-b from-background to-secondary/30 pt-10 pb-20">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-6 inline-block rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Powerful Features
        </motion.div>

        <motion.h2
          className="mb-6 text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything You Need for Legal Document Analysis
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our comprehensive suite of tools addresses all aspects of legal document management, from
          analysis to generation and prediction.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Features;