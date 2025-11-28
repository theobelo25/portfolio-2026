"use client";
import Header from "@/components/shared/header";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import businessAvatar from "@/public/images/portfolio-avatar-business.png";
import { cn } from "@/lib/utils";
import Projects from "../../components/shared/projects";
import { AnimatePresence, motion } from "framer-motion";
import ProjectFilters from "./project-filters";

const TEMP_PROJECTS = [
  {
    title: "Kenzerama Productions",
    slug: "kenzerama-productions",
    image: "/public/images/portfolio-avatar-full.png",
    description: "A website for my own company",
    tags: ["Next.js", "Mux API", "Meta API", "CURL", "Tailwind", "Framer"],
  },
  {
    title: "Prostore",
    slug: "prostore",
    image: "/public/images/portfolio-avatar-full.png",
    description:
      "A fully functional webstore with multiple payment integrations",
    tags: ["Next.js", "tailwind"],
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    image: "/public/images/portfolio-avatar-full.png",
    description: "This portfolio website",
    tags: ["Next.js", "Tailwind", "Framer"],
  },
];

const WorkPage = () => {
  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <div className="grid grid-cols-6">
        <AnimatePresence>
          <motion.div
            className="col-span-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl font-play text-center pb-16">My Work</h1>
            <p className="text-center font-questrial">
              Below is a selection of projects I&apos;ve built to showcase my
              skills in modern web development. Each one highlights a different
              aspect of my experience—from responsive UI design to backend
              logic, API integrations, and full-stack problem-solving. Feel free
              to explore any project that catches your eye; each has a dedicated
              page with details about the technologies used, the challenges
              solved, and what I learned along the way.
            </p>
          </motion.div>
        </AnimatePresence>
        <HeroAvatar
          avatar={businessAvatar}
          className="col-span-2 self-center justify-self-center"
        />
      </div>
      <ProjectFilters />
      <motion.div
        className="h-px bg-white"
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <Projects projects={TEMP_PROJECTS} />
    </main>
  );
};

export default WorkPage;
