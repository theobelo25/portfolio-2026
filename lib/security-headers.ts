import { directusPublicUrl } from "./directus-env";

export type SecurityHeader = { key: string; value: string };

/** CSP tuned for Next.js (inline scripts/styles) and Directus asset origins. */
export function buildContentSecurityPolicy(directusOrigin: string): string {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data: blob: ${directusOrigin}`,
    "font-src 'self'",
    `connect-src 'self' ${directusOrigin}`,
  ];
  return directives.join("; ");
}

export function buildSecurityHeaders(options?: {
  isProduction?: boolean;
  directusOrigin?: string;
}): SecurityHeader[] {
  const isProduction = options?.isProduction ?? false;
  const directusOrigin = options?.directusOrigin ?? directusPublicUrl();

  const headers: SecurityHeader[] = [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
      key: "Content-Security-Policy",
      value: buildContentSecurityPolicy(directusOrigin),
    },
  ];

  if (isProduction) {
    headers.push({
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    });
  }

  return headers;
}
