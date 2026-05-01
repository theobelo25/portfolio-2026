"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ContactAvatarCaption() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.p
      className="text-2xl font-press-start mt-10 text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : undefined }}
    >
      Thank you for visiting!
    </motion.p>
  );
}
