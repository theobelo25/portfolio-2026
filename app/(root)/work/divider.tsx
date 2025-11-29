"use client";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      className="h-px bg-white"
      initial={{ width: 0 }}
      animate={{ width: "80%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    />
  );
};

export default Divider;
