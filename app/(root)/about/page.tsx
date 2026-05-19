import HeroAvatar from "@/components/shared/hero/hero-avatar";
import fun from "@/public/images/avatars/portfolio-avatar-fun.webp";
import { SKILL_CATEGORIES } from "@/lib/constants";
import AboutMeMotion from "./about-me-motion";
import AboutMe from "./about-me";
import Education from "./education";
import EducationExperienceMotion from "./education-experience-motion";
import Experience from "./experience";
import SkillsMotion from "./skills-motion";
import Skills from "./skills";

export default function AboutPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex flex-col gap-8 pt-30 pb-page-footer md:grid md:grid-cols-6 md:gap-x-4 md:gap-y-4"
    >
      <HeroAvatar
        avatar={fun}
        className="basis-auto w-full max-w-[300px] self-center justify-self-center md:col-span-2"
      />
      <AboutMeMotion>
        <AboutMe />
      </AboutMeMotion>
      <EducationExperienceMotion
        education={<Education />}
        experience={<Experience />}
      />
      <SkillsMotion>
        <Skills categories={SKILL_CATEGORIES} />
      </SkillsMotion>
    </main>
  );
}
