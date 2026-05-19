import { cn } from "@/lib/utils";

const MAX_VISIBLE_TAGS = 4;

const chipClass =
  "rounded-full border border-border bg-muted/60 px-3 py-1 text-sm font-questrial text-muted-foreground";

const ProjectCardTags = ({
  tags,
  className,
}: {
  tags?: string[] | null;
  className?: string;
}) => {
  const list = (tags ?? []).filter(
    (tag): tag is string => typeof tag === "string" && tag.trim().length > 0,
  );
  const visible = list.slice(0, MAX_VISIBLE_TAGS);
  const overflow = list.length - visible.length;

  return (
    <div
      className={cn("flex min-h-[2.75rem] min-w-0 flex-1 items-end", className)}
      aria-hidden={visible.length === 0 && overflow === 0}
    >
      {visible.length > 0 ? (
        <ul
          className="flex max-h-[5.5rem] flex-wrap gap-2 overflow-hidden"
          aria-label="Technologies and topics"
        >
          {visible.map((tag) => (
            <li key={tag} className={chipClass}>
              {tag}
            </li>
          ))}
          {overflow > 0 ? (
            <li className={cn(chipClass, "border-dashed")}>+{overflow} more</li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
};

export default ProjectCardTags;
