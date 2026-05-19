import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProjectCard from "./project-card";
import { type Project } from "@/types";

vi.mock("next/image", () => ({
  default: (props: React.ComponentProps<"img">) => {
    const {
      fill: _fill,
      blurDataURL: _blur,
      placeholder: _placeholder,
      ...rest
    } = props as React.ComponentProps<"img"> & {
      fill?: boolean;
      blurDataURL?: string;
      placeholder?: string;
    };
    return <img alt="" {...rest} />;
  },
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...props}>{children}</div>
    ),
  },
  useReducedMotion: () => true,
}));

afterEach(() => {
  cleanup();
});

const baseProject: Project = {
  id: "1",
  title: "Caseflow",
  slug: "caseflow",
  image: "abc",
  description: "",
  shortDescription: "Workflow tooling for legal teams.",
  tags: ["Next.js", "TypeScript"],
  links: [{ name: "Website", url: "https://example.com" }],
};

describe("ProjectCard", () => {
  it("exposes a single case-study link with an accessible name", () => {
    render(<ProjectCard project={baseProject} />);

    expect(
      screen.getByRole("link", { name: "View case study: Caseflow" }),
    ).toHaveAttribute("href", "/projects/caseflow");
  });

  it("keeps external affordances as separate tab stops after the overlay link", () => {
    render(<ProjectCard project={baseProject} />);

    const card = screen.getByRole("article");
    const caseStudy = within(card).getByRole("link", {
      name: "View case study: Caseflow",
    });
    const liveSite = within(card).getByRole("link", { name: /Website.*new tab/i });

    expect(
      caseStudy.compareDocumentPosition(liveSite) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders the visible title as a heading (overlay carries navigation)", () => {
    render(<ProjectCard project={baseProject} titleHeadingLevel={3} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Caseflow" }),
    ).toBeInTheDocument();
  });
});
