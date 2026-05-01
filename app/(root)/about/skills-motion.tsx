"use client";

import { motion } from "framer-motion";

export default function SkillsMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="col-span-1 md:col-span-2 max-sm:py-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
}
