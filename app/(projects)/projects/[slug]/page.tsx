import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Stack from "./stack";
import Description from "./description";
import ProjectHeader from "./project-header";
import Reflection from "./reflection";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;
const options = { next: { revalidate: 0 } };

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const project = await client.fetch<SanityDocument>(
    PROJECT_QUERY,
    await params,
    options
  );

  const projectImageUrl = project.image
    ? urlFor(project.image)?.width(550).height(310).url()
    : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProjectHeader
        title={project?.title}
        name={project?.name}
        image={projectImageUrl}
        tags={project?.tags}
        links={project?.links}
      />
      <Stack stack={project?.stack} integrations={project?.tags} />
      <Description description={project?.description} />
      <Reflection
        challenges={project?.challenges}
        learning={project?.learning}
      />
    </div>
  );
};

export default ProjectPage;
