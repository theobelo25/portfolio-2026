"use client";
import ProjectCard from "./project-card";
import { AnimatePresence, motion, stagger } from "framer-motion";
import { Key, useEffect, useState } from "react";
import { type Project } from "@/types";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [currentProjects, setCurrentProjects] = useState(projects);

  useEffect(() => {
    console.log(projects);
    setCurrentProjects(projects);
  }, [projects]);

  return (
    <motion.section
      className="pb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="visible"
      exit="hidden"
      key={currentProjects as unknown as Key}
      transition={{
        delayChildren: stagger(0.15),
      }}
    >
      {projects.length === 0 ? (
        <div>No projects found</div>
      ) : (
        <>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </>
      )}
    </motion.section>
  );
};

export default Projects;
