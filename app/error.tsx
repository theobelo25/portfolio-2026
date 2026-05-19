"use client";

import { RouteError } from "@/components/shared/route-error";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex min-h-[50vh] flex-col justify-center pt-30 pb-page-footer"
    >
      <RouteError error={error} reset={reset} />
    </main>
  );
}
