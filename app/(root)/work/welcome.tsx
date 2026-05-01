import HeroAvatar from "@/components/shared/hero/hero-avatar";
import businessAvatar from "@/public/images/avatars/portfolio-avatar-business.webp";
import WelcomeHeroMotion from "./welcome-hero-motion";

export default function Welcome() {
  return (
    <WelcomeHeroMotion
      intro={
        <>
          <h1 className="text-6xl font-play text-center pb-8 lg:pb-16">
            My Work
          </h1>
          <p className="text-center font-questrial">
            Below is a selection of projects I&apos;ve built to showcase my
            skills in modern web development. Each one highlights a different
            aspect of my experience—from responsive UI design to backend logic,
            API integrations, and full-stack problem-solving. Feel free to explore
            any project that catches your eye; each has a dedicated page with
            details about the technologies used, the challenges solved, and what
            I learned along the way.
          </p>
        </>
      }
    >
      <HeroAvatar
        avatar={businessAvatar}
        className="order-1 md:order-2 max-sm:mb-5 col-span-2 self-center justify-self-center"
      />
    </WelcomeHeroMotion>
  );
}
