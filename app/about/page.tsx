"use client";
import Header from "@/components/shared/header";
import HeroAvatar from "../../components/shared/hero/hero-avatar";
import { cn } from "@/lib/utils";
import { motion, stagger, Variants } from "framer-motion";
import fun from "@/public/images/portfolio-avatar-fun.png";
import Skills from "./skills";
import AboutMe from "./about-me";
import { ABOUT_VARIANTS } from "@/components/shared/motion/variants";
import Education from "./education";
import Experience from "./experience";

const TEMP_SKILLS = [
  "HTML / CSS / SASS",
  "Javascript / Typescript",
  "PHP / Wordpress",
  "ReactJS / Remix",
  "NodeJS",
  "SQL",
  "Git / SVN",
  "Netsuite / SuiteCommerce",
  "MVC Architecture",
  "Ansible",
  "Docker",
  "VPS Provision / Maintenance",
  "Responsive Design",
  "WCAG / Accessibility",
  "REST APIs",
  "Scripting",
];

const AboutPage = () => {
  return (
    <main className="wrapper pt-30 pb-20 grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-x-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <HeroAvatar
        avatar={fun}
        className="col-span-1 md:col-span-2 self-center justify-self-center"
      />
      <AboutMe />
      <Skills skills={TEMP_SKILLS} />
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 col-span-4 gap-4"
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: stagger(0.2) }}
      >
        <Education />
        <Experience />
      </motion.div>
    </main>
  );
};

export default AboutPage;
