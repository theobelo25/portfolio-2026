import ProjectCardAffordances from "@/components/shared/projects/project-card-affordances";
import { type ProjectLink } from "@/types";

/** @deprecated Use ProjectCardAffordances directly. Kept for imports that expect this module. */
const ProjectLinks = ({
  links,
  className,
}: {
  links?: ProjectLink[] | null;
  className?: string;
}) => {
  return <ProjectCardAffordances links={links} className={className} />;
};

export default ProjectLinks;
