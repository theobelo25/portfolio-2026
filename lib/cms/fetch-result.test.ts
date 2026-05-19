import { describe, expect, it } from "vitest";
import {
  cmsDataRejected,
  cmsOk,
  cmsUnavailable,
  mergeCmsFetchFlags,
} from "./fetch-result";

describe("cms fetch result helpers", () => {
  it("cmsOk marks data as available", () => {
    expect(cmsOk(["a"])).toEqual({
      data: ["a"],
      cmsUnavailable: false,
      cmsDataRejected: false,
    });
  });

  it("cmsUnavailable returns empty data with outage flag", () => {
    expect(cmsUnavailable([])).toEqual({
      data: [],
      cmsUnavailable: true,
      cmsDataRejected: false,
    });
  });

  it("cmsDataRejected returns empty data with rejection flag", () => {
    expect(cmsDataRejected([])).toEqual({
      data: [],
      cmsUnavailable: false,
      cmsDataRejected: true,
    });
  });
});

describe("mergeCmsFetchFlags", () => {
  it("prefers outage over rejection", () => {
    expect(
      mergeCmsFetchFlags(
        { cmsUnavailable: true, cmsDataRejected: false },
        { cmsUnavailable: false, cmsDataRejected: true },
      ),
    ).toEqual({ cmsUnavailable: true, cmsDataRejected: false });
  });

  it("sets rejection when any fetch rejected and none unavailable", () => {
    expect(
      mergeCmsFetchFlags(
        { cmsUnavailable: false, cmsDataRejected: true },
        { cmsUnavailable: false, cmsDataRejected: false },
      ),
    ).toEqual({ cmsUnavailable: false, cmsDataRejected: true });
  });
});
