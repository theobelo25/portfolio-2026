"use client";

import Header from "@/components/shared/header";
import { RouteError } from "@/components/shared/route-error";
import { cn } from "@/lib/utils";

export default function WorkError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <RouteError
        error={error}
        reset={reset}
        fallbackHref="/"
        fallbackLabel="Home"
      />
    </main>
  );
}
