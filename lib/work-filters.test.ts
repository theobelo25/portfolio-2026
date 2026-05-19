import { describe, expect, it } from "vitest";
import {
  filterProjectsByTag,
  normalizeFilter,
  resolveActiveFilter,
} from "./work-filters";

const projects = [
  { slug: "a", tags: ["Design", "React"] },
  { slug: "b", tags: ["React"] },
  { slug: "c", tags: ["Design"] },
];

describe("normalizeFilter", () => {
  it("returns null when filter is absent", () => {
    expect(normalizeFilter(undefined)).toBeNull();
  });

  it("decodes URI-encoded values", () => {
    expect(normalizeFilter("Design%20Systems")).toBe("Design Systems");
  });

  it("uses the first value when filter is an array", () => {
    expect(normalizeFilter(["React", "Design"])).toBe("React");
  });

  it("returns null for invalid percent-encoding", () => {
    expect(normalizeFilter("%E0%A4%A")).toBeNull();
  });
});

describe("resolveActiveFilter", () => {
  const tags = ["Design", "React"];

  it("treats All as no active filter", () => {
    expect(resolveActiveFilter("All", tags)).toBeNull();
  });

  it("returns null for unknown tags", () => {
    expect(resolveActiveFilter("Vue", tags)).toBeNull();
  });

  it("returns the tag when it exists", () => {
    expect(resolveActiveFilter("React", tags)).toBe("React");
  });
});

describe("filterProjectsByTag", () => {
  it("returns all projects when no filter is active", () => {
    expect(filterProjectsByTag(projects, null)).toHaveLength(3);
  });

  it("filters by tag", () => {
    const filtered = filterProjectsByTag(projects, "React");
    expect(filtered.map((p) => p.slug)).toEqual(["a", "b"]);
  });
});
