"use client";

import { motion, stagger } from "framer-motion";

export default function StaggerTwoColumn({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: stagger(0.2) }}
    >
      {children}
    </motion.div>
  );
}
