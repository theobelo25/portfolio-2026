import { FileText, Github } from "lucide-react";
import Link from "next/link";
import {
  APP_NAME,
  AVAILABILITY_LINE,
  GITHUB_HANDLE,
  GITHUB_URL,
  RESUME_HREF,
  YEARS_EXPERIENCE,
} from "@/lib/constants";
import LocaleText from "@/components/shared/locale-text";
import {
  ProfileLinkList,
  ProfileLinkRow,
} from "@/components/shared/profile-link-row";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-5xl font-play">About Me</h1>
      <p className="py-6">
        I’m a full-stack web developer with {YEARS_EXPERIENCE}+ years spanning
        B2B e-commerce, enterprise automation, and public marketing web. As a
        NetSuite consultant and SuiteCommerce developer I shipped storefronts
        and scripted integrations, operations, and reporting against client
        datasets spanning millions of rows. In my other roles I built marketing
        sites and experiences with Canadian English and{" "}
        <LocaleText lang="fr">français</LocaleText> localization for a major U.S.
        brand—including WCAG-minded components, keyboard-tested patterns, and
        launch discipline where confidentiality mattered. I’m at home in greenfield and legacy
        codebases and typically ship with trunk-based workflows and CI. Across
        the stack I use Angular, React, TypeScript, Node.js, .NET, and
        SQL/PostgreSQL—working with design, product, QA, and clients to turn
        complex requirements into maintainable, reliable software.
      </p>
      <p className="pb-2 font-questrial text-subtle">
        {AVAILABILITY_LINE}
      </p>
      <p className="pb-6 font-questrial text-subtle">
        Selected builds and write-ups are on the{" "}
        <Link
          href="/work"
          className="text-foreground underline underline-offset-4 decoration-foreground/40 transition-colors hover:decoration-foreground"
        >
          Work page
        </Link>
        .
      </p>
      <ProfileLinkList
        align="start"
        layout="inline"
        className="w-full flex-col gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-4"
      >
        <ProfileLinkRow
          icon={FileText}
          label="Download CV"
          href={RESUME_HREF}
          download
          prefetch={false}
          align="start"
          className="md:justify-center"
          ariaLabel={`Download ${APP_NAME}'s resume (PDF)`}
        />
        <ProfileLinkRow
          icon={Github}
          label="GitHub"
          subtitle={GITHUB_HANDLE}
          href={GITHUB_URL}
          external
          align="start"
          className="md:justify-center"
          ariaLabel={`${APP_NAME} on GitHub, ${GITHUB_URL}`}
        />
      </ProfileLinkList>
    </>
  );
};

export default AboutMe;
