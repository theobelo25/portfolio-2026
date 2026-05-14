import { type Project } from "@/types";
import ProjectCard from "./project-card";

export default function Projects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <section className="pb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <p
          className="col-span-full text-center text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          No projects found
        </p>
      </section>
    );
  }

  return (
    <section className="pb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
