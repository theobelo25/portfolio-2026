import { beforeEach, describe, expect, it, vi } from "vitest";
import { type Project } from "@/types";

vi.mock("@/lib/actions/projects.actions", () => ({
  getAllProjects: vi.fn(),
}));

import { getAllProjects } from "@/lib/actions/projects.actions";
import { getAdjacentProject } from "./project-navigation";

const mockedGetAllProjects = vi.mocked(getAllProjects);

function project(slug: string): Project {
  return {
    id: slug.length,
    title: slug,
    slug,
    image: "/img.png",
    description: "",
    shortDescription: "",
    tags: [],
  };
}

describe("getAdjacentProject", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns the next project in order, wrapping to the first", async () => {
    mockedGetAllProjects.mockResolvedValue({
      data: [project("alpha"), project("beta"), project("gamma")],
      cmsUnavailable: false,
      cmsDataRejected: false,
    });

    const { next } = await getAdjacentProject("beta");
    expect(next?.slug).toBe("gamma");

    const wrapped = await getAdjacentProject("gamma");
    expect(wrapped.next?.slug).toBe("alpha");
  });

  it("returns null when slug is missing or only one project exists", async () => {
    mockedGetAllProjects.mockResolvedValue({
      data: [project("solo")],
      cmsUnavailable: false,
      cmsDataRejected: false,
    });

    const missing = await getAdjacentProject("unknown");
    expect(missing.next).toBeNull();

    const single = await getAdjacentProject("solo");
    expect(single.next).toBeNull();
  });

  it("returns null when the project list is empty or unavailable", async () => {
    mockedGetAllProjects.mockResolvedValue({
      data: [],
      cmsUnavailable: true,
      cmsDataRejected: false,
    });

    const { next } = await getAdjacentProject("alpha");
    expect(next).toBeNull();
  });
});
