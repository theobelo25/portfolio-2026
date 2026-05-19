import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FilterButton from "./filter-button";

describe("FilterButton", () => {
  it("links to the encoded work filter query", () => {
    render(<FilterButton filter="Design Systems" isActive={false} />);

    const link = screen.getByRole("link", { name: "Design Systems" });
    expect(link).toHaveAttribute(
      "href",
      "/work?filter=Design%20Systems",
    );
    expect(link).not.toHaveAttribute("aria-current");
  });

  it("links All to /work without a filter query", () => {
    render(<FilterButton filter="All" isActive />);

    expect(screen.getByRole("link", { name: "All" })).toHaveAttribute(
      "href",
      "/work",
    );
  });

  it("marks the active filter for assistive tech", () => {
    render(<FilterButton filter="React" isActive />);

    expect(screen.getByRole("link", { name: "React" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });
});
