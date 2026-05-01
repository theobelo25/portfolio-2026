"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WelcomeHeroMotion({
  intro,
  children,
}: {
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      <motion.div
        className="order-2 md:order-1 col-span-1 md:col-span-4"
        initial={reduceMotion ? false : { opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : undefined }}
      >
        {intro}
      </motion.div>
      {children}
    </div>
  );
}
