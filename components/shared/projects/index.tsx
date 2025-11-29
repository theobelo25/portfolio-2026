"use client";
import ProjectCard from "./project-card";
import type { Project } from "@/sanity.types";
import { motion, stagger } from "framer-motion";
import { SanityDocument } from "next-sanity";

const Projects = ({ projects }: { projects: Project[] }) => {
  console.log(projects);
  return (
    <motion.section
      className="pb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: stagger(0.15),
      }}
    >
      {projects.length === 0 ? (
        <div>No projects found</div>
      ) : (
        <>
          {projects.map((project) => (
            <ProjectCard key={project.slug.current} project={project} />
          ))}
        </>
      )}
    </motion.section>
  );
};

export default Projects;
