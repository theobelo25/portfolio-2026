import { APP_NAME, GITHUB_URL, LINKEDIN_URL, ROLE } from "@/lib/constants";
import { homeTitleAbsolute } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

function originNoSlash(url: string) {
  return url.replace(/\/$/, "");
}

/**
 * Person + ProfilePage structured data for the portfolio home (sitewide in root layout).
 */
export default function PersonProfileJsonLd() {
  const origin = originNoSlash(siteUrl);
  const personId = `${origin}/#person`;
  const profilePageId = `${origin}/#profile`;

  const sameAs = [GITHUB_URL, LINKEDIN_URL].filter(
    (href): href is string =>
      typeof href === "string" && href.startsWith("http"),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: APP_NAME,
        jobTitle: ROLE,
        url: `${origin}/`,
        sameAs,
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: `${origin}/`,
        name: homeTitleAbsolute,
        mainEntity: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
