import Header from "@/components/shared/header";
import { cn } from "@/lib/utils";

export default function WorkLoading() {
  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <div
        className="flex flex-col gap-6 animate-pulse"
        aria-busy="true"
        aria-label="Loading work"
      >
        <div className="mx-auto h-12 w-56 rounded-md bg-muted" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-[4.5rem] rounded-full bg-muted md:w-24"
            />
          ))}
        </div>
        <div className="h-px w-full bg-border" />
        <section className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-muted" />
          ))}
        </section>
      </div>
    </main>
  );
}
