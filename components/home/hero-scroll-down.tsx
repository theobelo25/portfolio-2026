"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const TARGET_ID = "featured-work";

export default function HeroScrollDown() {
  const reduceMotion = useReducedMotion() ?? false;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(TARGET_ID)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const className = cn(
    "absolute bottom-4 left-1/2 z-10 -translate-x-1/2",
    "flex size-10 items-center justify-center rounded-full",
    "border border-border bg-background/80 text-muted-foreground backdrop-blur-sm",
    "transition-colors hover:bg-accent hover:text-accent-foreground",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
  );

  const label = "Scroll to featured work";

  if (reduceMotion) {
    return (
      <a
        href={`#${TARGET_ID}`}
        onClick={handleClick}
        className={className}
        aria-label={label}
      >
        <ChevronDown className="size-5" aria-hidden />
      </a>
    );
  }

  return (
    <motion.a
      href={`#${TARGET_ID}`}
      onClick={handleClick}
      className={className}
      aria-label={label}
      animate={{ y: [0, 5, 0] }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="size-5" aria-hidden />
    </motion.a>
  );
}
