"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ContactMeMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="col-span-1 w-full py-10"
      initial={reduceMotion ? false : { opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.25,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
