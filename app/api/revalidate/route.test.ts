import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("next/cache", () => ({
  revalidateTag: vi.fn(),
}));

import { POST } from "./route";

const originalEnv = process.env;

describe("POST /api/revalidate", () => {
  beforeEach(() => {
    process.env = { ...originalEnv, REVALIDATE_SECRET: "test-secret" };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it("returns 401 when the secret is missing or wrong", async () => {
    const unauthorized = await POST(
      new NextRequest("http://localhost/api/revalidate"),
    );
    expect(unauthorized.status).toBe(401);

    const wrongSecret = await POST(
      new NextRequest("http://localhost/api/revalidate?secret=wrong"),
    );
    expect(wrongSecret.status).toBe(401);
  });

  it("returns 401 when REVALIDATE_SECRET is not configured", async () => {
    delete process.env.REVALIDATE_SECRET;

    const res = await POST(
      new NextRequest("http://localhost/api/revalidate?secret=anything"),
    );
    expect(res.status).toBe(401);
  });

  it("accepts the secret via query string or header", async () => {
    const viaQuery = await POST(
      new NextRequest("http://localhost/api/revalidate?secret=test-secret", {
        method: "POST",
      }),
    );
    expect(viaQuery.status).toBe(200);
    expect(await viaQuery.json()).toEqual({ revalidated: true });

    const viaHeader = await POST(
      new NextRequest("http://localhost/api/revalidate", {
        method: "POST",
        headers: { "x-revalidate-secret": "test-secret" },
      }),
    );
    expect(viaHeader.status).toBe(200);
  });
});
