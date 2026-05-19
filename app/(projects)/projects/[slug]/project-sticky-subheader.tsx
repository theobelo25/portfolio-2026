"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ProjectBackLink from "./project-back-link";

const SCROLL_THRESHOLD = 280;

const ProjectStickySubheader = ({ title }: { title: string }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-[4.25rem] z-40 border-b border-border/60 bg-zinc-50/90 backdrop-blur-md transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-black/90 motion-reduce:transition-none",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "-translate-y-full opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="wrapper flex items-center gap-3 py-2.5">
        <ProjectBackLink compact />
        <span
          className="min-w-0 truncate font-play text-sm text-foreground"
          title={title}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default ProjectStickySubheader;
