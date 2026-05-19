import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { type Project } from "@/types";

const mockRequest = vi.fn();

vi.mock("next/cache", () => ({
  unstable_cache: <T extends (...args: never[]) => unknown>(fn: T) => fn,
}));

vi.mock("@/lib/directus", () => ({
  default: {
    request: (...args: unknown[]) => mockRequest(...args),
  },
}));

vi.mock("@/lib/cms/lqip", () => ({
  enrichProjectsWithLqip: vi.fn((projects: Project[]) =>
    Promise.resolve(projects),
  ),
  enrichProjectWithLqip: vi.fn((project: Project) => Promise.resolve(project)),
}));

import {
  getAllProjects,
  getAllTags,
  getFeaturedProjects,
  getProject,
} from "./projects.actions";

const validDirectusProject = {
  id: 1,
  title: "Case study",
  slug: "case-study",
  image: "abc-123",
  description: "Body",
  shortDescription: "Summary",
  tags: ["React"],
  is_featured: true,
};

describe("projects.actions", () => {
  beforeEach(() => {
    mockRequest.mockReset();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("getAllProjects", () => {
    it("returns parsed projects when Directus responds with valid rows", async () => {
      mockRequest.mockResolvedValue([validDirectusProject]);

      const result = await getAllProjects();

      expect(result.cmsUnavailable).toBe(false);
      expect(result.cmsDataRejected).toBe(false);
      expect(result.data).toHaveLength(1);
      expect(result.data[0]?.slug).toBe("case-study");
    });

    it("returns cmsUnavailable when directus.request throws", async () => {
      mockRequest.mockRejectedValue(new Error("network"));

      const result = await getAllProjects();

      expect(result).toEqual({
        data: [],
        cmsUnavailable: true,
        cmsDataRejected: false,
      });
    });

    it("returns cmsDataRejected when every row fails validation", async () => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      mockRequest.mockResolvedValue([{ title: "invalid" }]);

      const result = await getAllProjects();

      expect(result).toEqual({
        data: [],
        cmsUnavailable: false,
        cmsDataRejected: true,
      });
      expect(errorSpy).toHaveBeenCalledWith(
        "[cms] fetchAllProjects: 1 item(s) returned but none passed validation",
      );
      errorSpy.mockRestore();
    });

    it("returns cmsOk with an empty list for a legitimate empty collection", async () => {
      mockRequest.mockResolvedValue([]);

      const result = await getAllProjects();

      expect(result).toEqual({
        data: [],
        cmsUnavailable: false,
        cmsDataRejected: false,
      });
    });
  });

  describe("getFeaturedProjects", () => {
    it("returns cmsDataRejected when featured rows all fail validation", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});
      mockRequest.mockResolvedValue([{ slug: "" }]);

      const result = await getFeaturedProjects();

      expect(result.cmsDataRejected).toBe(true);
      expect(result.data).toEqual([]);
    });
  });

  describe("getAllTags", () => {
    it("returns merged tags for valid tag payloads", async () => {
      mockRequest.mockResolvedValue([
        { tags: ["React", "Design"] },
        { tags: ["Node"] },
      ]);

      const result = await getAllTags();

      expect(result).toEqual({
        data: ["Design", "Node", "React"],
        cmsUnavailable: false,
        cmsDataRejected: false,
      });
    });

    it("returns cmsDataRejected when every tags row fails validation", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});
      mockRequest.mockResolvedValue([{ tags: "not-an-array" }]);

      const result = await getAllTags();

      expect(result.cmsDataRejected).toBe(true);
      expect(result.data).toEqual([]);
    });
  });

  describe("getProject", () => {
    it("returns a project when Directus returns a valid row", async () => {
      mockRequest.mockResolvedValue([validDirectusProject]);

      const project = await getProject("case-study");

      expect(project?.slug).toBe("case-study");
    });

    it("returns undefined when directus.request throws", async () => {
      mockRequest.mockRejectedValue(new Error("timeout"));

      const project = await getProject("case-study");

      expect(project).toBeUndefined();
    });

    it("returns undefined when the slug row fails validation", async () => {
      mockRequest.mockResolvedValue([{ title: "invalid" }]);

      const project = await getProject("case-study");

      expect(project).toBeUndefined();
    });
  });
});
