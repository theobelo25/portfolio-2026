"use client";

import { RouteError } from "@/components/shared/route-error";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <RouteError
      error={error}
      reset={reset}
      fallbackHref="/work"
      fallbackLabel="All projects"
    />
  );
}
