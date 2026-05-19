import { cleanup, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const motionMocks = vi.hoisted(() => ({
  useReducedMotion: vi.fn(() => false),
}));

vi.mock("framer-motion", () => ({
  motion: {
    ul: ({
      children,
      initial,
      animate,
      ...rest
    }: ComponentProps<"ul"> & { initial?: string; animate?: string }) => (
      <ul data-testid="motion-ul" data-initial={initial} data-animate={animate} {...rest}>
        {children}
      </ul>
    ),
    li: ({ children, ...rest }: ComponentProps<"li">) => (
      <li data-testid="motion-li" {...rest}>
        {children}
      </li>
    ),
  },
  stagger: () => 0.075,
  useReducedMotion: () => motionMocks.useReducedMotion(),
}));

import ProjectFilters from "./project-filters";

describe("ProjectFilters", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    motionMocks.useReducedMotion.mockReturnValue(false);
  });

  it("exposes filter navigation and tag chips", () => {
    render(<ProjectFilters filters={["React", "Design"]} activeFilter={null} />);

    expect(
      screen.getByRole("navigation", { name: /filter projects by tag/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All" })).toHaveAttribute("href", "/work");
    expect(screen.getByRole("link", { name: "React" })).toHaveAttribute(
      "href",
      "/work?filter=React",
    );
  });

  it("renders a static list when reduced motion is preferred", () => {
    motionMocks.useReducedMotion.mockReturnValue(true);

    render(<ProjectFilters filters={["React"]} activeFilter="React" />);

    expect(screen.queryByTestId("motion-ul")).not.toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "React" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });

  it("staggers filter chips when motion is allowed", () => {
    render(<ProjectFilters filters={["Design"]} activeFilter={null} />);

    const motionList = screen.getByRole("navigation").querySelector("[data-testid='motion-ul']");
    expect(motionList).not.toBeNull();
    expect(motionList).toHaveAttribute("data-initial", "hidden");
    expect(motionList).toHaveAttribute("data-animate", "visible");
    expect(
      screen.getByRole("navigation").querySelectorAll("[data-testid='motion-li']").length,
    ).toBeGreaterThan(0);
  });
});
