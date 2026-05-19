import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  createLqipUrl,
  resolveDirectusAssetId,
} from "@/lib/utils";
import { fetchImageBlurDataUrl } from "./lqip";

describe("resolveDirectusAssetId", () => {
  it("returns raw file ids unchanged", () => {
    expect(resolveDirectusAssetId("abc-123")).toBe("abc-123");
  });

  it("extracts id from Directus asset URLs", () => {
    expect(
      resolveDirectusAssetId("https://cms.example.com/assets/uuid-here"),
    ).toBe("uuid-here");
  });

  it("returns null for non-Directus URLs", () => {
    expect(resolveDirectusAssetId("https://cdn.example.com/photo.jpg")).toBe(
      null,
    );
  });
});

describe("createLqipUrl", () => {
  it("builds a tiny transform URL for file ids", () => {
    const url = createLqipUrl("file-id", "https://cms.example.com");
    expect(url).toBe(
      "https://cms.example.com/assets/file-id?width=16&height=16&fit=cover&quality=30&format=jpg",
    );
  });

  it("returns null when the image is not a Directus asset", () => {
    expect(createLqipUrl("https://cdn.example.com/photo.jpg")).toBeNull();
  });
});

describe("fetchImageBlurDataUrl", () => {
  beforeEach(() => {
    vi.stubEnv("DIRECTUS_URL", "https://cms.example.com");
    vi.stubEnv("NEXT_PUBLIC_DIRECTUS_URL", "https://cms.example.com");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("returns a data URL when the LQIP fetch succeeds", async () => {
    const bytes = new Uint8Array([0xff, 0xd8, 0xff]);
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(bytes, {
          status: 200,
          headers: { "content-type": "image/jpeg" },
        }),
      ),
    );

    const blur = await fetchImageBlurDataUrl("file-id");
    expect(blur).toBe(
      `data:image/jpeg;base64,${Buffer.from(bytes).toString("base64")}`,
    );
    expect(fetch).toHaveBeenCalledWith(
      "https://cms.example.com/assets/file-id?width=16&height=16&fit=cover&quality=30&format=jpg",
      expect.objectContaining({ signal: expect.any(AbortSignal) }),
    );
  });

  it("returns undefined when the fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(null, { status: 404 })),
    );

    expect(await fetchImageBlurDataUrl("file-id")).toBeUndefined();
  });
});
