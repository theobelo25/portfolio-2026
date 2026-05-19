import { cn } from "@/lib/utils";

const ProjectSection = ({
  children,
  className,
  divided = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** Top border + padding when true (flat section rhythm). */
  divided?: boolean;
}) => {
  return (
    <section
      className={cn(
        "space-y-6",
        divided && "border-t border-border/60 pt-16",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default ProjectSection;
