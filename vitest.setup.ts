import "@testing-library/jest-dom/vitest";
import React from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    prefetch: _prefetch,
    scroll: _scroll,
    ...rest
  }: React.ComponentProps<"a"> & {
    href: string;
    prefetch?: boolean;
    scroll?: boolean;
  }) => React.createElement("a", { href, ...rest }, children),
}));

afterEach(() => {
  cleanup();
});
