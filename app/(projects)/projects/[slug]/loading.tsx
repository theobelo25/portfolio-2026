export default function ProjectLoading() {
  return (
    <div
      className="grid grid-cols-1 gap-8 lg:grid-cols-2 animate-pulse"
      aria-busy="true"
      aria-label="Loading project"
    >
      <div className="space-y-4">
        <div className="h-14 w-4/5 max-w-md rounded-md bg-muted" />
        <div className="flex gap-2">
          <div className="h-8 w-16 rounded-full bg-muted" />
          <div className="h-8 w-20 rounded-full bg-muted" />
        </div>
        <div className="aspect-video w-full rounded-lg bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-5/6 rounded bg-muted" />
      </div>
      <div className="space-y-4">
        <div className="h-8 w-32 rounded bg-muted" />
        <div className="h-24 w-full rounded-lg bg-muted" />
        <div className="h-8 w-40 rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-4/5 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
