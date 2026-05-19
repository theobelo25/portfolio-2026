import { describe, expect, it } from "vitest";
import {
  buildContentSecurityPolicy,
  buildSecurityHeaders,
} from "./security-headers";

describe("buildContentSecurityPolicy", () => {
  it("allows the configured Directus origin for images and fetch", () => {
    const csp = buildContentSecurityPolicy("https://admin.example.com");

    expect(csp).toContain("https://admin.example.com");
    expect(csp).toContain("img-src");
    expect(csp).toContain("connect-src");
    expect(csp).toContain("frame-ancestors 'none'");
  });
});

describe("buildSecurityHeaders", () => {
  it("includes baseline hardening headers", () => {
    const keys = buildSecurityHeaders({
      isProduction: false,
      directusOrigin: "https://cms.test",
    }).map((h) => h.key);

    expect(keys).toEqual(
      expect.arrayContaining([
        "X-Frame-Options",
        "X-Content-Type-Options",
        "Referrer-Policy",
        "Permissions-Policy",
        "Content-Security-Policy",
      ]),
    );
    expect(keys).not.toContain("Strict-Transport-Security");
  });

  it("adds HSTS in production", () => {
    const headers = buildSecurityHeaders({
      isProduction: true,
      directusOrigin: "https://cms.test",
    });

    expect(headers.find((h) => h.key === "Strict-Transport-Security")?.value).toMatch(
      /max-age=/,
    );
  });
});
