import HeroAvatar from "@/components/shared/hero/hero-avatar";
import ProjectCardSkeleton from "@/components/shared/projects/project-card-skeleton";
import businessAvatar from "@/public/images/avatars/portfolio-avatar-business.webp";
import WorkWelcomeGrid, { workWelcomeAvatarClassName } from "./work-welcome-grid";
import WorkWelcomeIntroSkeleton from "./work-welcome-intro-skeleton";

export default function WorkLoading() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex flex-col gap-4 pt-30 pb-page-footer"
    >
      <WorkWelcomeGrid
        intro={<WorkWelcomeIntroSkeleton />}
        avatar={
          <HeroAvatar
            avatar={businessAvatar}
            className={workWelcomeAvatarClassName}
          />
        }
      />
      <div
        className="flex flex-col gap-6 animate-pulse"
        aria-busy="true"
        aria-label="Loading work"
      >
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-[4.5rem] rounded-full bg-muted md:w-24"
            />
          ))}
        </div>
        <div className="h-px w-full bg-border" />
        <section className="grid grid-cols-1 gap-4 pb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </section>
      </div>
    </main>
  );
}
