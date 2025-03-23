"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      className="py-20 text-center bg-blue-600 text-white"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">AI-Powered Marketing Solutions</h1>
      <p className="mt-4 text-lg">Unlock your brand’s full potential with cutting-edge AI.</p>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-white text-blue-600 px-6 py-2 rounded"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
}
