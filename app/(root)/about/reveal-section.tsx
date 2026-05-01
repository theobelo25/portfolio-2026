"use client";

import { motion, type Variants } from "framer-motion";
import { ABOUT_VARIANTS } from "@/components/shared/motion/variants";

export default function RevealSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={ABOUT_VARIANTS as Variants} className={className}>
      {children}
    </motion.div>
  );
}
