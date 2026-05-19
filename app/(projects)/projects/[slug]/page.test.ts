import { beforeEach, describe, expect, it, vi } from "vitest";

const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/navigation", () => ({
  notFound,
}));

vi.mock("@/lib/actions/projects.actions", () => ({
  getAllProjects: vi.fn(),
  getProject: vi.fn(),
}));

vi.mock("@/lib/project-navigation", () => ({
  getAdjacentProject: vi.fn().mockResolvedValue({ next: null }),
}));

import { getProject } from "@/lib/actions/projects.actions";
import { generateMetadata } from "./page";

const mockedGetProject = vi.mocked(getProject);

describe("Project page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls notFound when the project slug does not exist", async () => {
    mockedGetProject.mockResolvedValue(
      undefined as unknown as Awaited<ReturnType<typeof getProject>>,
    );

    await expect(
      generateMetadata({ params: Promise.resolve({ slug: "missing-slug" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFound).toHaveBeenCalled();
  });
});
