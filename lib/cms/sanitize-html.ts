import DOMPurify from "isomorphic-dompurify";

/** Sanitize CMS HTML before rendering with `dangerouslySetInnerHTML`. */
export function sanitizeProjectHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["lang", "dir"],
  });
}
