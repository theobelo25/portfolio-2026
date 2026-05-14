import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import Stack from "./stack";
import Description from "./description";
import ProjectHeader from "./project-header";
import Reflection from "./reflection";
import { getAllProjects, getProject } from "@/lib/actions/projects.actions";
import { siteDescription } from "@/lib/site";
import { createImageUrl } from "@/lib/utils";

type MaybePromise<T> = T | Promise<T>;

type ProjectParams = {
  slug: string;
};

const getProjectCached = cache((slug: string) => getProject(slug));

export async function generateStaticParams() {
  try {
    const projects = await getAllProjects();
    return projects
      .filter((p) => typeof p.slug === "string" && p.slug.length > 0)
      .map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: MaybePromise<ProjectParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectCached(slug);
  if (!project) {
    notFound();
  }
  const title = project.title;
  const description =
    project.shortDescription ??
    (typeof project.description === "string"
      ? project.description.replace(/<[^>]*>/g, "").trim().slice(0, 160)
      : siteDescription);
  const path = `/projects/${slug}`;
  const ogImageUrl = project.image ? createImageUrl(project.image) : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

const ProjectPage = async ({
  params,
}: {
  params: MaybePromise<ProjectParams>;
}) => {
  const { slug } = await params;
  const project = await getProjectCached(slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProjectHeader
        title={project.title}
        image={project.image}
        tags={project.tags}
        links={project.links}
      />
      <Stack stack={project.stack} integrations={project.tags} />
      <Description description={project.description} />
      <Reflection
        challenges={project.challenges}
        learning={project.learning}
      />
    </div>
  );
};

export default ProjectPage;
