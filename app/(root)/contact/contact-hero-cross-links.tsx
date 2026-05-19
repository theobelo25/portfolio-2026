import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_NAME, CONTACT_EMAIL, RESUME_HREF } from "@/lib/constants";

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  `Inquiry from ${APP_NAME}'s portfolio`,
)}`;

/** Quick paths from the Contact hero so reviewers can keep scanning the site. */
const ContactHeroCrossLinks = () => {
  return (
    <nav
      aria-label="Quick links"
      className="flex flex-wrap justify-start gap-3 pt-4"
    >
      <Button variant="default" size="lg" className="font-play" asChild>
        <a href={mailtoHref}>Email me</a>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <Link href="/work">View work</Link>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <Link
          href={RESUME_HREF}
          download
          prefetch={false}
          aria-label={`Download ${APP_NAME}'s resume (PDF)`}
        >
          Download CV
        </Link>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <Link href="/about">About & background</Link>
      </Button>
    </nav>
  );
};

export default ContactHeroCrossLinks;
