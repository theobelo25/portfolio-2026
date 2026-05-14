"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PAGE_TRANSITION_VARIANTS } from "./variants";

/**
 * Enter-only route motion. Intended for `app/.../template.tsx`, which Next
 * remounts on client navigations — unlike `layout.tsx`, which persists.
 */
export function RouteEnter({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate="animate"
      variants={PAGE_TRANSITION_VARIANTS}
    >
      {children}
    </motion.div>
  );
}
