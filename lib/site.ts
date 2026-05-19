/** Production defaults — keep aligned with README and `.env.example`. */
export const SITE_URL_DEFAULT = "https://theocodes.dev";
export const LINKEDIN_URL_DEFAULT =
  "https://www.linkedin.com/in/theodore-belo";
export const GITHUB_URL_DEFAULT = "https://github.com/theobelo25/";

function normalizeOrigin(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return SITE_URL_DEFAULT;
  try {
    const parsed = new URL(
      /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`,
    );
    return parsed.origin;
  } catch {
    return SITE_URL_DEFAULT;
  }
}

/** Canonical site origin for metadata, OG URLs, sitemap, and JSON-LD. */
export const siteUrl = normalizeOrigin(
  process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL_DEFAULT,
);

export const siteName = "TheoCodes.dev";

/** Absolute URL for a path (e.g. `/work`); uses the same origin as `metadataBase`. */
export function absoluteUrl(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, siteUrl).href;
}
