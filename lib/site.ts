/** Canonical site origin for metadata, OG URLs, and sitemap-style links. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://theocodes.dev";

/** Absolute URL for a path (e.g. `/work`); uses the same origin as `metadataBase`. */
export function absoluteUrl(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, siteUrl).href;
}

export const siteName = "TheoCodes.dev";

export const siteDescription =
  "A personal and professional portfolio for Theodore Belo.";
