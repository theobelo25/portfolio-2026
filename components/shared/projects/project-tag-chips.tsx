import { cn } from "@/lib/utils";

const ProjectTagChips = ({
  tags,
  className,
  label = "Technologies and topics",
}: {
  tags: string[];
  className?: string;
  label?: string;
}) => {
  if (!tags?.length) return null;

  return (
    <ul
      className={cn("flex flex-wrap gap-2", className)}
      aria-label={label}
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border bg-muted/60 px-3 py-1 text-sm font-questrial text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ProjectTagChips;
