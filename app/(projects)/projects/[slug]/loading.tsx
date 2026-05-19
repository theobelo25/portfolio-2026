function SectionHeadingSkeleton() {
  return (
    <header className="space-y-2">
      <div className="h-3 w-16 rounded bg-muted" />
      <div className="h-8 w-36 rounded-md bg-muted sm:w-40" />
    </header>
  );
}

export default function ProjectLoading() {
  return (
    <article
      className="flex animate-pulse flex-col gap-16"
      aria-busy="true"
      aria-label="Loading project"
    >
      <div className="h-4 w-24 rounded bg-muted" />

      <header className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="h-12 w-4/5 max-w-lg rounded-md bg-muted sm:h-14" />
          <div className="flex gap-3">
            <div className="h-4 w-16 rounded bg-muted" />
            <div className="h-4 w-12 rounded bg-muted" />
          </div>
        </div>
        <div className="aspect-[16/10] w-full rounded-2xl bg-muted ring-1 ring-border/40" />
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <div className="h-4 w-full max-w-2xl rounded bg-muted" />
            <div className="h-4 w-5/6 max-w-xl rounded bg-muted" />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="h-7 w-16 rounded-full bg-muted" />
            <div className="h-7 w-20 rounded-full bg-muted" />
            <div className="h-7 w-14 rounded-full bg-muted" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 max-w-prose space-y-16">
          <section className="space-y-6">
            <SectionHeadingSkeleton />
            <div className="h-20 w-full rounded-xl border border-border/60 bg-muted/50" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-11/12 rounded bg-muted" />
              <div className="h-4 w-5/6 rounded bg-muted" />
            </div>
          </section>

          <section className="space-y-6 border-t border-border/60 pt-16">
            <SectionHeadingSkeleton />
            <ol className="space-y-8 border-l-2 border-primary/30 pl-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <li key={i} className="space-y-2">
                  <div className="h-3 w-8 rounded bg-muted" />
                  <div className="h-5 w-48 rounded bg-muted" />
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-4/5 rounded bg-muted" />
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <SectionHeadingSkeleton />
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-3 w-14 rounded bg-muted" />
              <div className="flex flex-wrap gap-1.5">
                <div className="h-6 w-14 rounded-full bg-muted" />
                <div className="h-6 w-16 rounded-full bg-muted" />
                <div className="h-6 w-12 rounded-full bg-muted" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-14 rounded bg-muted" />
              <div className="flex flex-wrap gap-1.5">
                <div className="h-6 w-16 rounded-full bg-muted" />
                <div className="h-6 w-20 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </aside>
      </div>

      <footer className="space-y-6 border-t border-border/60 pt-16">
        <div className="h-3 w-20 rounded bg-muted" />
        <div className="flex flex-wrap gap-3">
          <div className="h-11 w-44 rounded-md bg-muted" />
          <div className="h-11 w-28 rounded-md bg-muted" />
        </div>
      </footer>
    </article>
  );
}
