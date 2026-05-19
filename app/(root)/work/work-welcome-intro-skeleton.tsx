export default function WorkWelcomeIntroSkeleton() {
  return (
    <div
      className="flex flex-col gap-6 animate-pulse pb-8 lg:pb-16"
      aria-hidden
    >
      <div className="mx-auto h-14 w-48 rounded-lg bg-muted md:h-16 md:w-56" />
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="mx-auto h-5 w-full max-w-xl rounded bg-muted" />
        <div className="mx-auto h-5 w-full max-w-lg rounded bg-muted" />
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <div className="h-9 w-28 rounded-full bg-muted" />
          <div className="h-9 w-24 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
