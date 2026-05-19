import { describe, expect, it } from "vitest";
import { mergeTagsFromProjects, parseProject, parseProjects } from "./project-schema";

const validProject = {
  id: 1,
  title: "Case study",
  slug: "case-study",
  image: "abc-123",
  description: "Body",
  shortDescription: "Summary",
  tags: ["React", "Design"],
  is_featured: true,
};

describe("parseProjects", () => {
  it("returns validated projects and drops invalid rows", () => {
    const { items, rawCount, parsedCount } = parseProjects([
      validProject,
      { ...validProject, slug: "" },
      { title: "missing fields" },
    ]);

    expect(items).toHaveLength(1);
    expect(rawCount).toBe(3);
    expect(parsedCount).toBe(1);
    expect(items[0]?.slug).toBe("case-study");
    expect(items[0]?.tags).toEqual(["React", "Design"]);
  });

  it("returns zero counts for non-array payloads", () => {
    expect(parseProjects(null)).toEqual({
      items: [],
      rawCount: 0,
      parsedCount: 0,
    });
    expect(parseProjects({})).toEqual({
      items: [],
      rawCount: 0,
      parsedCount: 0,
    });
  });
});

describe("parseProject", () => {
  it("coerces numeric ids from string", () => {
    const project = parseProject({ ...validProject, id: "42" });
    expect(project?.id).toBe(42);
  });
});

describe("mergeTagsFromProjects", () => {
  it("merges unique tags in sorted order", () => {
    const { items } = mergeTagsFromProjects([
      { tags: ["React", "Design"] },
      { tags: ["React", "Node"] },
      { tags: [] },
    ]);
    expect(items).toEqual(["Design", "Node", "React"]);
  });

  it("reports raw and parsed counts", () => {
    const result = mergeTagsFromProjects([
      { tags: ["A"] },
      { tags: "invalid" },
    ]);
    expect(result.rawCount).toBe(2);
    expect(result.parsedCount).toBe(1);
    expect(result.items).toEqual(["A"]);
  });
});
