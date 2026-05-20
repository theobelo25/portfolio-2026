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
  }, [pathname]);

  return (
    <div className="route-transition-host">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={pathname}
          layoutRoot
          className="route-transition-shell w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
