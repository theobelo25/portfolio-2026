"use client";
import { motion, useReducedMotion } from "framer-motion";

const Divider = () => {
  const reduceMotion = useReducedMotion() ?? false;

  if (reduceMotion) {
    return <div className="h-px w-[80%] max-w-full bg-border" />;
  }

  return (
    <motion.div
      className="h-px max-w-full bg-border"
      initial={{ width: 0 }}
      animate={{ width: "80%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    />
  );
};

export default Divider;
