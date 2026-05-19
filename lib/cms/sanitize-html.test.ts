import { describe, expect, it } from "vitest";
import { sanitizeProjectHtml } from "./sanitize-html";

describe("sanitizeProjectHtml", () => {
  it("strips script tags and unsafe attributes", () => {
    const html =
      '<p onclick="alert(1)">Hello</p><script>alert("xss")</script><img src=x onerror=alert(1) />';
    const safe = sanitizeProjectHtml(html);

    expect(safe).not.toContain("<script");
    expect(safe).not.toContain("onclick");
    expect(safe).not.toContain("onerror");
    expect(safe).toContain("Hello");
  });

  it("preserves lang on inline and figure captions for bilingual case studies", () => {
    const html =
      '<p>EN copy with <span lang="fr">texte français</span>.</p><figure><img src="https://cdn.example.com/a.png" alt="UI" /><figcaption lang="fr">Interface en français</figcaption></figure>';
    const safe = sanitizeProjectHtml(html);

    expect(safe).toContain('lang="fr"');
    expect(safe).toContain("texte français");
    expect(safe).toContain("Interface en français");
  });
});
