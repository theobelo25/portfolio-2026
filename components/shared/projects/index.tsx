"use client";
import ProjectCard from "./project-card";
import { AnimatePresence } from "framer-motion";
import { useEffect, useEffectEvent, useState } from "react";
import { type Project } from "@/types";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [currentProjects, setCurrentProjects] = useState<Project[]>(projects);

  const setCurrentList = useEffectEvent(() => {
    setCurrentProjects(projects);
  });
  useEffect(() => setCurrentList(), [projects]);

  return (
    <section className="pb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {currentProjects.length === 0 ? (
        <div>No projects found</div>
      ) : (
        <AnimatePresence>
          {currentProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      )}
    </section>
  );
};

export default Projects;
