"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * Route enter uses CSS (see `.route-transition-shell` in `globals.css`).
 * `AnimatePresence mode="popLayout"` keeps the previous route mounted briefly so
 * shared `layoutId` elements (e.g. avatar) can animate between pages.
 * `.route-transition-host` stacks entering/exiting shells so document height
 * does not sum two pages during the transition.
 */
export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // After shared layoutId moves (e.g. Home → Contact), shell height can settle late on slow devices.
    const raf = requestAnimationFrame(() => window.scrollTo(0, 0));
    const afterLayout = window.setTimeout(() => window.scrollTo(0, 0), 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(afterLayout);
    };
  }, [pathname]);

  return (
    <div className="route-transition-host">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={pathname}
          className="route-transition-shell w-full"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
