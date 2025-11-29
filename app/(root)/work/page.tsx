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

const TEMP_PROJECTS = [
  {
    title: "Kenzerama Productions",
    slug: "kenzerama-productions",
    image: "/public/images/portfolio-avatar-full.png",
    description: "A website for my own company",
    tags: ["Next.js", "Mux API", "Meta API", "CURL", "Tailwind", "Framer"],
  },
  {
    title: "Prostore",
    slug: "prostore",
    image: "/public/images/portfolio-avatar-full.png",
    description:
      "A fully functional webstore with multiple payment integrations",
    tags: ["Next.js", "tailwind"],
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    image: "/public/images/portfolio-avatar-full.png",
    description: "This portfolio website",
    tags: ["Next.js", "Tailwind", "Framer"],
  },
];

const WorkPage = async () => {
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <Welcome />
      <ProjectFilters />
      <Divider />
      <Projects projects={projects as Project[]} />
    </main>
  );
};

export default WorkPage;
