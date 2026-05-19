import { ExternalLink, Github, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ProjectLink } from "@/types";

function linkLabel(link: ProjectLink) {
  const n = link.name.toLowerCase();
  if (n === "website") return "Live site";
  if (n.includes("github")) return "Repo";
  return link.name;
}

export default function ProjectCardAffordances({
  links,
  className,
}: {
  links?: ProjectLink[] | null;
  className?: string;
}) {
  const valid = (links ?? []).filter((l) => typeof l.url === "string" && l.url.trim());
  if (valid.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-end gap-x-3 gap-y-1",
        className,
      )}
    >
      {valid.map((link) => (
        <a
          key={`${link.name}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md text-xs font-questrial text-muted-foreground underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${link.name} (opens in a new tab)`}
        >
          {link.name === "Website" ? (
            <Globe className="size-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <Github className="size-3.5 shrink-0" aria-hidden="true" />
          )}
          <span>{linkLabel(link)}</span>
          <ExternalLink className="size-3 shrink-0 opacity-70" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
