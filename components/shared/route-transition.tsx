"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Route enter uses CSS (see `.route-transition-shell` in `globals.css`).
 * `AnimatePresence mode="popLayout"` keeps the previous route mounted briefly so
 * shared `layoutId` elements (e.g. avatar) can animate between pages.
 */
export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div key={pathname} className="route-transition-shell w-full">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
