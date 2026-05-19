import CmsUnavailableNotice from "@/components/shared/cms-unavailable-notice";
import Projects from "@/components/shared/projects";
import { Button } from "@/components/ui/button";
import { type Project } from "@/types";
import Link from "next/link";

export default function FeaturedWork({
  projects,
  cmsUnavailable = false,
  cmsDataRejected = false,
}: {
  projects: Project[];
  cmsUnavailable?: boolean;
  cmsDataRejected?: boolean;
}) {
  const hasFeatured = projects.length > 0;

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="scroll-mt-28 flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-8"
    >
      {cmsUnavailable ? (
        <div className="lg:col-span-12">
          <CmsUnavailableNotice context="featured" reason="unavailable" />
        </div>
      ) : cmsDataRejected ? (
        <div className="lg:col-span-12">
          <CmsUnavailableNotice context="featured" reason="dataRejected" />
        </div>
      ) : null}
      <header className="flex max-w-2xl flex-col gap-3 lg:col-span-3">
        <h2
          id="featured-work-heading"
          className="text-3xl font-play md:text-4xl"
        >
          Featured work
        </h2>
        <p className="font-questrial text-muted-foreground">
          {cmsUnavailable ? (
            <>
              The hero and navigation are still available. Visit Work when content
              is back, or try refreshing this page.
            </>
          ) : cmsDataRejected ? (
            <>
              Highlights could not be read from the CMS. Visit Work or refresh this
              page—other sections of the site are unaffected.
            </>
          ) : hasFeatured ? (
            <>
              A few projects marked as highlights from my portfolio. Each case
              study covers tech choices, challenges, and outcomes—explore the
              rest on Work.
            </>
          ) : (
            <>
              No projects are highlighted right now. Open Work to see the full
              portfolio—case studies, stack notes, and outcomes.
            </>
          )}
        </p>
      </header>
      {hasFeatured ? (
        <div className="min-w-0 lg:col-span-9">
          <Projects projects={projects} titleHeadingLevel={3} />
        </div>
      ) : null}
      <div className="flex justify-center pt-2 lg:col-span-12">
        <Button variant="outline" size="lg" className="font-play" asChild>
          <Link href="/work">View all work</Link>
        </Button>
      </div>
    </section>
  );
}
