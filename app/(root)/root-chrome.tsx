"use client";

import Header from "@/components/shared/header";
import RouteTransition from "@/components/shared/route-transition";
import { cn } from "@/lib/utils";

/**
 * Fixed nav lives outside `RouteTransition` so it does not remount (and replay
 * the route CSS enter) when moving between routes.
 */
export default function RootChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <RouteTransition>{children}</RouteTransition>
    </>
  );
}
