import Header from "@/components/shared/header";
import Welcome from "./welcome";
import { cn } from "@/lib/utils";
import Projects from "../../../components/shared/projects";
import ProjectFilters from "./project-filters";
import Divider from "./divider";
import { type Project } from "@/types";

import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getProjects() {
  // Fetch items from the 'posts' collection
  const projects = await directus.request(readItems("projects"));
  return projects;
}

const projects = await getProjects();

const WorkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) => {
  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <Welcome />
      {/* <ProjectFilters filters={projectFilters} /> */}
      <Divider />
      <Projects projects={projects as Project[]} />
    </main>
  );
};

export default WorkPage;
