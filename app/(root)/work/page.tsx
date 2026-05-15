import type { Metadata } from "next";
import Welcome from "./welcome";
import Projects from "../../../components/shared/projects";
import ProjectFilters from "./project-filters";
import Divider from "./divider";
import { type Project } from "@/types";
import { getAllProjects, getAllTags } from "@/lib/actions/projects.actions";

type MaybePromise<T> = T | Promise<T>;

type WorkSearchParams = {
  filter?: string | string[];
};

function normalizeFilter(value: WorkSearchParams["filter"]): string | null {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return null;

  try {
    const decoded = decodeURIComponent(rawValue).trim();
    return decoded.length > 0 ? decoded : null;
  } catch {
    return null;
  }
}

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and case studies — web development and software engineering by Theodore Belo.",
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: "Work",
    description:
      "Selected projects and case studies — web development and software engineering by Theodore Belo.",
  },
  twitter: { title: "Work" },
};

const WorkPage = async ({
  searchParams,
}: {
  searchParams: MaybePromise<WorkSearchParams>;
}) => {
  const { filter } = await searchParams;
  const [projects, tags] = await Promise.all([
    getAllProjects(),
    getAllTags(),
  ]);
  const normalizedFilter = normalizeFilter(filter);
  const activeFilter =
    normalizedFilter && normalizedFilter !== "All" && tags.includes(normalizedFilter)
      ? normalizedFilter
      : null;

  const filteredProjects = projects.filter((project) => {
    if (!activeFilter) {
      return project;
    }
    return project.tags.includes(activeFilter);
  });

  return (
    <main className="wrapper pt-30 flex flex-col gap-4">
      <Welcome />
      <ProjectFilters filters={tags} />
      <Divider />
      <Projects projects={filteredProjects as Project[]} />
    </main>
  );
};

export default WorkPage;
