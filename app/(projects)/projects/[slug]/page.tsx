import Stack from "./stack";
import Description from "./description";
import ProjectHeader from "./project-header";
import Reflection from "./reflection";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* <ProjectHeader
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
      /> */}
    </div>
  );
};

export default ProjectPage;
