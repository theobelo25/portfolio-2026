import FeaturedWork from "@/components/home/featured-work";
import Hero from "../../components/shared/hero";
import { getFeaturedProjects } from "@/lib/actions/projects.actions";
import { homePageMetadata } from "@/lib/metadata";

export const metadata = homePageMetadata;

export default async function Home() {
  const {
    data: featured,
    cmsUnavailable,
    cmsDataRejected,
  } = await getFeaturedProjects();

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex flex-col gap-8 pb-page-footer md:gap-16"
    >
      {/* Full-viewport centering on md+; tighter stack on small screens. */}
      <section
        className="relative flex flex-col justify-center pt-28 pb-4 md:min-h-[calc(100vh-5rem)] md:pt-30 md:pb-20"
        aria-labelledby="hero-heading"
      >
        <Hero />
      </section>
      <FeaturedWork
        projects={featured}
        cmsUnavailable={cmsUnavailable}
        cmsDataRejected={cmsDataRejected}
      />
    </main>
  );
}
