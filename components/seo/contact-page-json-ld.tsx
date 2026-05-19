import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { buildContactDescription, LOCATION } from "@/lib/metadata";
import { absoluteUrl, siteName } from "@/lib/site";

function originNoSlash(url: string) {
  return url.replace(/\/$/, "");
}

/**
 * ContactPage + ContactPoint for /contact (no email — spam risk; page URL is the entry point).
 * Links to sitewide Person via @id.
 */
export default function ContactPageJsonLd() {
  const origin = originNoSlash(absoluteUrl("/"));
  const personId = `${origin}/#person`;
  const contactUrl = absoluteUrl("/contact");
  const pageId = `${contactUrl}#webpage`;
  const contactPointId = `${contactUrl}#contactpoint`;

  const sameAs = [GITHUB_URL, LINKEDIN_URL].filter(
    (href): href is string =>
      typeof href === "string" && href.startsWith("http"),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": pageId,
        url: contactUrl,
        name: `Contact | ${siteName}`,
        description: buildContactDescription(),
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
      {
        "@type": "ContactPoint",
        "@id": contactPointId,
        contactType: "recruiting",
        url: contactUrl,
        availableLanguage: ["en"],
        areaServed: LOCATION,
        sameAs,
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
