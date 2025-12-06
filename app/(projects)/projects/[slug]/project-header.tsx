import Tags from "@/components/shared/projects/tags";
import ProjectImage from "./project-image";
import ProjectLinks from "./project-links";

const ProjectHeader = ({
  title,
  name,
  image,
  tags,
  links,
}: {
  title: string;
  name: string;
  image: string | null;
  tags: string[];
  links: { url: string; name: string }[];
}) => {
  return (
    <section className="col-span-1">
      <h1 className="text-5xl">{title}</h1>
      <ProjectLinks links={links} />
      <ProjectImage projectName={name} image={image} />
      <Tags tags={tags} />
    </section>
  );
};

export default ProjectHeader;
