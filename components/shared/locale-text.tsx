import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Marks a phrase in another language (WCAG 3.1.2). Use for short EN/FR excerpts in
 * marketing copy or static pages—not for whole paragraphs (set `lang` on a wrapper).
 */
export default function LocaleText({
  lang,
  children,
  className,
}: {
  lang: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span lang={lang} className={cn(className)}>
      {children}
    </span>
  );
}
