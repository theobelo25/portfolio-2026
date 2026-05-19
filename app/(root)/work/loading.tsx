import ProjectCardSkeleton from "@/components/shared/projects/project-card-skeleton";

export default function WorkLoading() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex flex-col gap-4 pt-30 pb-page-footer"
    >
      {/* Reserve space for Welcome (nav, avatar, intro) without skeleton shapes there */}
      <div className="min-h-[28rem] md:min-h-[18rem]" aria-hidden />
      <div
        className="flex flex-col gap-6 animate-pulse"
        aria-busy="true"
        aria-label="Loading work"
      >
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-[4.5rem] rounded-full bg-muted md:w-24"
            />
          ))}
        </div>
        <div className="h-px w-full bg-border" />
        <section className="grid grid-cols-1 gap-4 pb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </section>
      </div>
    </main>
  );
}
