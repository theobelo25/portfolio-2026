import FeaturedWork from "@/components/home/featured-work";
import HeroScrollDown from "@/components/home/hero-scroll-down";
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
      className="wrapper flex flex-col gap-16 pb-page-footer"
    >
      {/* pt-30/pb-20 on this section (not the outer main) so vertical centering
          matches the pre–featured-work hero: padding participates in the same
          flex/min-h box as justify-center. */}
      <section
        className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center pt-30 pb-20"
        aria-labelledby="hero-heading"
      >
        <Hero />
        <HeroScrollDown />
      </section>
      <FeaturedWork
        projects={featured}
        cmsUnavailable={cmsUnavailable}
        cmsDataRejected={cmsDataRejected}
      />
    </main>
  );
}
