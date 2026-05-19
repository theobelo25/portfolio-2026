import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import Stack from "./stack";
import Description from "./description";
import ProjectEngagement from "./project-engagement";
import ProjectBackLink from "./project-back-link";
import ProjectFooterCtas from "./project-footer-ctas";
import ProjectHeader from "./project-header";
import ProjectPageMotion from "./project-page-motion";
import ProjectStickySubheader from "./project-sticky-subheader";
import Reflection from "./reflection";
import { getAllProjects, getProject } from "@/lib/actions/projects.actions";
import { getAdjacentProject } from "@/lib/project-navigation";
import { createPageMetadata, defaultSiteDescription } from "@/lib/metadata";
import { createImageUrl } from "@/lib/utils";

type MaybePromise<T> = T | Promise<T>;

type ProjectParams = {
  slug: string;
};

const getProjectCached = cache((slug: string) => getProject(slug));

export async function generateStaticParams() {
  const { data: projects } = await getAllProjects();
  return projects
    .filter((p) => typeof p.slug === "string" && p.slug.length > 0)
    .map((p) => ({ slug: p.slug }));
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
      : defaultSiteDescription);
  const path = `/projects/${slug}`;
  const ogImageUrl = project.image ? createImageUrl(project.image) : undefined;
  const page = createPageMetadata({
    title,
    description,
    pathname: path,
  });

  return {
    ...page,
    openGraph: {
      ...page.openGraph,
      type: "article",
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      ...page.twitter,
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
  const [project, { next: nextProject }] = await Promise.all([
    getProjectCached(slug),
    getAdjacentProject(slug),
  ]);
  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectStickySubheader title={project.title} />
      <ProjectPageMotion>
        <ProjectBackLink />
        <ProjectHeader
          title={project.title}
          shortDescription={project.shortDescription}
          image={project.image}
          imageBlurDataURL={project.imageBlurDataURL}
          tags={project.tags}
          links={project.links}
          timeline={project.timeline}
          engagement={project.engagement}
        />

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 max-w-prose">
            <ProjectEngagement
              engagement={project.engagement}
              role={project.role}
              employer={project.employer}
              team_context={project.team_context}
              slice={project.slice}
            />
            <Description
              description={project.description}
              outcome={project.shortDescription}
            />
            <Reflection
              challenges={project.challenges ?? []}
              learning={project.learning ?? ""}
            />
          </div>

          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:overscroll-contain">
            <Stack stack={project.stack ?? []} integrations={project.tags} />
          </aside>
        </div>

        <ProjectFooterCtas nextProject={nextProject} />
      </ProjectPageMotion>
    </>
  );
};

export default ProjectPage;
