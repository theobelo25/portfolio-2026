import Stack from "./stack";
import Description from "./description";
import ProjectHeader from "./project-header";
import Reflection from "./reflection";
import { getProject } from "@/lib/actions/projects.actions";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProjectHeader
        title={project?.title}
        image={project?.image}
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
