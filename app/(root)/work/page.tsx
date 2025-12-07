import Header from "@/components/shared/header";
import Welcome from "./welcome";
import { cn } from "@/lib/utils";
import Projects from "../../../components/shared/projects";
import ProjectFilters from "./project-filters";
import Divider from "./divider";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Project } from "@/sanity.types";

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]`;

const options = { next: { revalidate: 30 } };

const WorkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) => {
  const { filter } = await searchParams;

  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  const filteredProjects = projects.filter((project) => {
    if (filter === "all" || !filter) {
      return project;
    } else {
      return project.tags.includes(filter);
    }
  });

  const projectFilters: string[] = [
    ...new Set(
      projects
        .map((project) => {
          return project.tags;
        })
        .flat()
    ),
  ];

  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <Welcome />
      <ProjectFilters filters={projectFilters} />
      <Divider />
      <Projects projects={filteredProjects as Project[]} />
    </main>
  );
};

export default WorkPage;
