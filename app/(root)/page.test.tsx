import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/actions/projects.actions", () => ({
  getFeaturedProjects: vi.fn().mockResolvedValue({
    data: [],
    cmsUnavailable: false,
    cmsDataRejected: false,
  }),
}));

vi.mock("@/components/shared/hero", () => ({
  default: () => <div data-testid="hero" />,
}));

vi.mock("@/components/home/featured-work", () => ({
  default: () => <section aria-labelledby="featured-work-heading">Featured work</section>,
}));

import Home from "./page";

describe("Home page", () => {
  it("renders main content landmark", async () => {
    const ui = await Home();
    render(ui);

    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByText("Featured work")).toBeInTheDocument();
  });
});
