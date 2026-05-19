import { describe, expect, it, vi } from "vitest";
import { resolveProjectListFetch, resolveTagsFetch } from "./resolve-cms-list";

describe("resolveProjectListFetch", () => {
  it("returns cmsOk for valid projects", () => {
    const result = resolveProjectListFetch(
      [
        {
          id: 1,
          title: "Case study",
          slug: "case-study",
          image: "abc",
          description: "Body",
          shortDescription: "Summary",
          tags: [],
        },
      ],
      "test",
    );
    expect(result.cmsUnavailable).toBe(false);
    expect(result.cmsDataRejected).toBe(false);
    expect(result.data).toHaveLength(1);
  });

  it("returns cmsOk for empty array (legitimate empty)", () => {
    const result = resolveProjectListFetch([], "test");
    expect(result).toEqual({
      data: [],
      cmsUnavailable: false,
      cmsDataRejected: false,
    });
  });

  it("returns cmsDataRejected when every row fails validation", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = resolveProjectListFetch(
      [{ title: "missing fields" }, { slug: "" }],
      "test",
    );
    expect(result).toEqual({
      data: [],
      cmsUnavailable: false,
      cmsDataRejected: true,
    });
    expect(errorSpy).toHaveBeenCalledWith(
      "[cms] test: 2 item(s) returned but none passed validation",
    );
    errorSpy.mockRestore();
  });

  it("returns partial list when some rows fail validation", () => {
    const result = resolveProjectListFetch(
      [
        {
          id: 1,
          title: "Valid",
          slug: "valid",
          image: "abc",
          description: "Body",
          shortDescription: "Summary",
          tags: [],
        },
        { title: "invalid" },
      ],
      "test",
    );
    expect(result.cmsDataRejected).toBe(false);
    expect(result.data).toHaveLength(1);
  });
});

describe("resolveTagsFetch", () => {
  it("returns cmsDataRejected when every tags row fails validation", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = resolveTagsFetch([{ tags: "not-an-array" }], "testTags");
    expect(result.cmsDataRejected).toBe(true);
    expect(result.data).toEqual([]);
    errorSpy.mockRestore();
  });

  it("returns cmsOk with empty tags when rows validate but have no tags", () => {
    const result = resolveTagsFetch([{ tags: [] }, { tags: [] }], "testTags");
    expect(result).toEqual({
      data: [],
      cmsUnavailable: false,
      cmsDataRejected: false,
    });
  });
});
