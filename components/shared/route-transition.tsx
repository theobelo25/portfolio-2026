"use client";

import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

function clearRouteHostHeights() {
  document.querySelectorAll(".route-transition-host").forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.height = "";
    }
  });
}

/**
 * Only the entering route updates host height so scroll size ≠ previous page + new page.
 */
function RouteShell({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isPresent = useIsPresent();

  useLayoutEffect(() => {
    if (!isPresent || !ref.current) return;

    const host = ref.current.closest<HTMLElement>(".route-transition-host");
    if (!host) return;

    const syncHeight = () => {
      if (ref.current) {
        host.style.height = `${ref.current.offsetHeight}px`;
      }
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isPresent]);

  return (
    <motion.div
      ref={ref}
      className="route-transition-shell w-full"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="route-transition-host">
      <AnimatePresence
        mode="popLayout"
        initial={false}
        onExitComplete={clearRouteHostHeights}
      >
        <RouteShell key={pathname}>{children}</RouteShell>
      </AnimatePresence>
    </div>
  );
}
