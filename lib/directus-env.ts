/**
 * Directus base URLs for multi-environment / Docker:
 * - DIRECTUS_URL — server-side SDK (optional internal URL, e.g. http://directus:8055).
 * - NEXT_PUBLIC_DIRECTUS_URL — browser-reachable origin for /assets/* (Next/Image, Client Components).
 * If only one is set, it is used for both. For split public/internal setups, set both.
 */

export const DIRECTUS_URL_FALLBACK = "https://admin.theocodes.dev";

function normalizeBase(url: string) {
  return url.replace(/\/$/, "");
}

/** REST client + server-side requests. */
export function directusServerUrl(): string {
  const raw =
    process.env.DIRECTUS_URL?.trim() ||
    process.env.NEXT_PUBLIC_DIRECTUS_URL?.trim() ||
    DIRECTUS_URL_FALLBACK;
  return normalizeBase(raw);
}

/** Absolute origin for asset URLs (must be reachable from the browser). */
export function directusPublicUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_DIRECTUS_URL?.trim() ||
    process.env.DIRECTUS_URL?.trim() ||
    DIRECTUS_URL_FALLBACK;
  return normalizeBase(raw);
}
