import Header from "@/components/shared/header";
import Welcome from "./welcome";
import { cn } from "@/lib/utils";
import Projects from "../../../components/shared/projects";
import ProjectFilters from "./project-filters";
import Divider from "./divider";
import { type Project } from "@/types";
import { getAllProjects, getAllTags } from "@/lib/actions/projects.actions";

const WorkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) => {
  const { filter } = await searchParams;
  const projects = await getAllProjects();
  const tags = await getAllTags();

  const filteredProjects = projects.filter((project) => {
    if (filter === "All" || !filter) {
      return project;
    } else {
      return project.tags.includes(decodeURIComponent(filter));
    }
  });

  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <Welcome />
      <ProjectFilters filters={tags} />
      <Divider />
      <Projects projects={filteredProjects as Project[]} />
    </main>
  );
};

export default WorkPage;
