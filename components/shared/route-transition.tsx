"use client";

import { usePathname } from "next/navigation";

/**
 * Route enter uses CSS (see `.route-transition-shell` in `globals.css`).
 * Framer `AnimatePresence` + App Router RSC `children` in the same commit as
 * `pathname` reliably skips enter animations; `key={pathname}` remounts this
 * shell on every path change so the keyframe always runs.
 */
export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="route-transition-shell w-full">
      {children}
    </div>
  );
}
