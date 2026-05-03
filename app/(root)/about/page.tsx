"use client";
import Header from "@/components/shared/header";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import { cn } from "@/lib/utils";
import { motion, stagger } from "framer-motion";
import fun from "@/public/images/avatars/portfolio-avatar-fun.webp";
import Skills from "./skills";
import AboutMe from "./about-me";
import Education from "./education";
import Experience from "./experience";

const SKILL_CATEGORIES = [
  {
    title: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "Next.js",
      "Node.js (NestJS)",
      "ASP.NET Core",
      "Go",
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      "REST APIs",
      "JWT Auth (with refresh rotation)",
      "SOLID",
      "Clean Architecture",
      "Repository & Unit of Work",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Prisma", "EF Core", "SQL", "Migrations"],
  },
  {
    title: "DevOps & Tooling",
    items: ["Docker", "CI/CD", "Dokploy", "Logging (Pino, slog)"],
  },
  {
    title: "Testing",
    items: ["Jest", "Angular TestBed", "API/E2E testing"],
  },
] as const;

const AboutPage = () => {
  return (
    <main className="wrapper pt-30 pb-20 grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-x-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <HeroAvatar
        avatar={fun}
        className="col-span-1 md:col-span-2 self-center justify-self-center"
      />
      <AboutMe />
      <motion.div
        className="col-span-1 mx-auto flex w-full max-w-[300px] flex-col gap-4 md:col-span-2 md:justify-self-center"
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: stagger(0.1) }}
      >
        <Education />
        <Experience />
      </motion.div>
      <Skills categories={SKILL_CATEGORIES} />
    </main>
  );
};

export default AboutPage;
