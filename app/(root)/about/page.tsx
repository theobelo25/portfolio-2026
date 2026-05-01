import type { Metadata } from "next";
import Header from "@/components/shared/header";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import { cn } from "@/lib/utils";
import fun from "@/public/images/avatars/portfolio-avatar-fun.webp";
import Skills from "./skills";
import AboutMe from "./about-me";
import AboutEducationExperience from "./about-education-experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, skills, education, and professional experience — Theodore Belo.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About",
    description:
      "Background, skills, education, and professional experience — Theodore Belo.",
  },
  twitter: { title: "About" },
};

const TEMP_SKILLS = [
  "HTML / CSS / Tailwind",
  "JavaScript / TypeScript",
  "Angular",
  "React / Next.js / Remix",
  "Node.js",
  ".NET / C#",
  "SQL",
  "Git",
  "Docker / Docker Compose",
  "REST APIs",
  "Authentication / Authorization (JWT, guards, interceptors)",
  "Automated Testing (Vitest, Angular TestBed)",
  "CI/CD Troubleshooting",
  "Responsive Design",
  "WCAG / Accessibility",
  "Scripting / Automation",
];

export default function AboutPage() {
  return (
    <main className="wrapper pt-30 pb-20 grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-x-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <HeroAvatar
        avatar={fun}
        className="col-span-1 md:col-span-2 self-center justify-self-center"
      />
      <AboutMe />
      <Skills skills={TEMP_SKILLS} />
      <AboutEducationExperience />
    </main>
  );
}
