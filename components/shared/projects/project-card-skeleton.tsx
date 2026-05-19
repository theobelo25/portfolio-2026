import { cn } from "@/lib/utils";

const ProjectCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card lg:min-h-[14rem] lg:flex-row lg:items-stretch",
        className,
      )}
      aria-hidden="true"
    >
      <div className="aspect-[5/3] w-full shrink-0 bg-muted lg:aspect-auto lg:min-h-[14rem] lg:w-[42%] lg:self-stretch" />
      <div className="flex min-w-0 flex-1 flex-col gap-4 px-5 py-5 lg:px-6 lg:py-6">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-3/5 max-w-xs rounded-md bg-muted" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-11/12 rounded bg-muted" />
            <div className="h-4 w-4/5 rounded bg-muted" />
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex min-h-[2.75rem] min-w-0 flex-1 items-end gap-2">
            <div className="h-7 w-16 rounded-full bg-muted" />
            <div className="h-7 w-20 rounded-full bg-muted" />
            <div className="hidden h-7 w-14 rounded-full bg-muted sm:block" />
          </div>
          <div className="h-4 w-28 shrink-0 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
