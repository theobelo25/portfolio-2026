"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Enter animation runs after mount / pathname change so it is visible on reload
 * and client navigation (CSS-only on nested markup often finishes before paint or
 * is drowned out by `.route-transition-shell` opacity on the parent).
 */
export default function HeroHeadlineIntro({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion() ?? false;
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset before rAF-driven enter animation
    setPlay(false);
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) setPlay(true);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  if (reduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
