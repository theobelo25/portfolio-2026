"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type RouteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
  fallbackHref?: string;
  fallbackLabel?: string;
};

export function RouteError({
  error,
  reset,
  fallbackHref = "/",
  fallbackLabel = "Go home",
}: RouteErrorProps) {
  return (
    <div className="flex flex-col gap-4 py-4" role="alert">
      <h1 className="font-play text-2xl text-foreground">
        Something went wrong
      </h1>
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <div className="flex flex-wrap gap-2">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href={fallbackHref}>{fallbackLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
