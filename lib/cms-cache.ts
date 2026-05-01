/**
 * CMS / Directus data cache (Next.js Data Cache via unstable_cache + tags).
 *
 * CMS_REVALIDATE_SECONDS — time-based revalidation in seconds (default 300).
 *   Daily is fine for a portfolio: visitors see cached work until the window expires,
 *   or you call POST /api/revalidate after a CMS publish. Example: CMS_REVALIDATE_SECONDS=86400
 *
 * Route-level `export const revalidate` is not used here: Next.js 16 requires a
 * statically analyzable literal on the page; env-driven TTL lives on unstable_cache only.
 *
 * REVALIDATE_SECRET — shared secret for POST /api/revalidate (?secret= or x-revalidate-secret).
 */

const parsed = Number.parseInt(process.env.CMS_REVALIDATE_SECONDS ?? "", 10);

export const CMS_REVALIDATE_SECONDS =
  Number.isFinite(parsed) && parsed > 0 ? parsed : 300;

/** Invalidates all project list + per-slug entries that include this tag. */
export const CMS_TAG_PROJECTS = "directus:projects";

/** Optional narrow invalidation (also bump the list if filters/titles change). */
export function cmsProjectTag(slug: string) {
  return `directus:project:${slug}`;
}
