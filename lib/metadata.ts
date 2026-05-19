import type { Metadata } from "next";
import { APP_NAME, HERO_VALUE_LINE, ROLE } from "@/lib/constants";
import { siteName, siteUrl } from "@/lib/site";

export const LOCATION = "Toronto, Ontario";

/** Fallback description when a page does not define its own. */
export const defaultSiteDescription =
  "Portfolio of Theodore Belo — full-stack web development projects and case studies.";

export const homeTitleAbsolute = `${APP_NAME} — ${ROLE}`;

/** `public/` social preview. No root `opengraph-image` file so this drives og:image. */
export const defaultOpenGraphImagePath = "/og-image-1.webp" as const;

const defaultOpenGraphImageEntry = {
  url: defaultOpenGraphImagePath,
  width: 1200,
  height: 630,
  alt: `${siteName} — preview`,
};

export function buildHomeDescription() {
  return `${ROLE} in ${LOCATION}. ${HERO_VALUE_LINE}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  /** Bypass the `%s | siteName` title template (used on home). */
  titleAbsolute?: string;
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
};

/** Site-wide defaults; set once in the root layout. */
export function createBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: defaultSiteDescription,
    applicationName: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      title: siteName,
      description: defaultSiteDescription,
      images: [defaultOpenGraphImageEntry],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: defaultSiteDescription,
      images: [defaultOpenGraphImagePath],
    },
  };
}

/** Per-route overrides merged with base layout metadata. */
export function createPageMetadata({
  title,
  description,
  pathname,
  titleAbsolute,
  openGraph,
  twitter,
}: PageMetadataInput): Metadata {
  const shareTitle = titleAbsolute ?? title;

  return {
    title: titleAbsolute ? { absolute: titleAbsolute } : title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      url: pathname,
      title: shareTitle,
      description,
      images: [defaultOpenGraphImageEntry],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [defaultOpenGraphImagePath],
      ...twitter,
    },
  };
}

export const homePageMetadata = createPageMetadata({
  title: APP_NAME,
  titleAbsolute: homeTitleAbsolute,
  description: buildHomeDescription(),
  pathname: "/",
});

export const workPageMetadata = createPageMetadata({
  title: "Work",
  description:
    "Selected projects and case studies — full-stack web apps with Next.js, TypeScript, .NET, and PostgreSQL by Theodore Belo.",
  pathname: "/work",
});

export const aboutPageMetadata = createPageMetadata({
  title: "About",
  description: `About ${APP_NAME} — ${ROLE.toLowerCase()} in ${LOCATION}. Skills, experience, education, and downloadable CV.`,
  pathname: "/about",
});

export function buildContactDescription() {
  return `Contact ${APP_NAME} — ${ROLE.toLowerCase()} in ${LOCATION}. Open to full-time and contract roles; remote or hybrid. Email, GitHub, LinkedIn, and CV download.`;
}

export const contactPageMetadata = createPageMetadata({
  title: "Contact",
  description: buildContactDescription(),
  pathname: "/contact",
});
