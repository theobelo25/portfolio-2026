import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectBackLink = ({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) => {
  return (
    <Link
      href="/work"
      className={cn(
        "inline-flex w-fit items-center gap-1 font-questrial text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
        compact && "shrink-0",
        className,
      )}
    >
      <ChevronLeft className="size-4 shrink-0" aria-hidden="true" />
      <span>All work</span>
    </Link>
  );
};

export default ProjectBackLink;
