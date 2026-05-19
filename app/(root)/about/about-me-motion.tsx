"use client";

import { motion } from "framer-motion";

export default function AboutMeMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="col-span-1 flex w-full flex-col items-start md:col-span-4 md:items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
