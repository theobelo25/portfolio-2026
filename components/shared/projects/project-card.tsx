"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProjectCardAffordances from "./project-card-affordances";
import ProjectCardTags from "./project-card-tags";
import { motion, useReducedMotion } from "framer-motion";
import { createImageUrl } from "@/lib/utils";
import { type Project } from "@/types";

export type ProjectTitleHeadingLevel = 2 | 3;

const ProjectCard = ({
  project,
  titleHeadingLevel = 2,
}: {
  project: Project;
  titleHeadingLevel?: ProjectTitleHeadingLevel;
}) => {
  const reduceMotion = useReducedMotion() ?? false;
  const TitleTag = titleHeadingLevel === 3 ? "h3" : "h2";
  const caseStudyLabel = `View case study: ${project.title}`;

  const content = (
    <div className="group/card min-w-0">
      <article className="relative min-w-0">
        <Card className="relative flex h-full min-h-0 w-full flex-col gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 shadow-sm transition-shadow duration-200 group-hover/card:shadow-md group-focus-within/card:shadow-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background lg:min-h-[14rem] lg:flex-row lg:items-stretch">
          <Link
            href={`/projects/${project.slug}`}
            className="project-card-overlay-link absolute inset-0 z-[1] rounded-2xl focus-visible:z-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={caseStudyLabel}
          />
          <div className="relative z-10 flex min-h-0 w-full shrink-0 flex-col pointer-events-none lg:flex-row lg:items-stretch">
            <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden lg:aspect-auto lg:h-auto lg:min-h-[14rem] lg:w-[42%] lg:self-stretch">
              <Image
                src={createImageUrl(project.image)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 42vw"
                placeholder={project.imageBlurDataURL ? "blur" : undefined}
                blurDataURL={project.imageBlurDataURL}
                aria-hidden
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-4 px-5 py-5 lg:px-6 lg:py-6">
              <div className="flex min-w-0 flex-col gap-2">
                <TitleTag className="font-play text-2xl leading-tight md:text-3xl">
                  {project.title}
                </TitleTag>
                <p className="line-clamp-3 font-questrial text-sm leading-relaxed text-subtle md:text-base">
                  {project.shortDescription}
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <ProjectCardTags tags={project.tags} />
                <div className="pointer-events-auto relative z-20 flex shrink-0 flex-wrap items-center justify-end gap-3">
                  <ProjectCardAffordances links={project.links} />
                  <p
                    className="font-questrial text-sm text-subtle opacity-0 transition-opacity duration-200 group-hover/card:opacity-100 group-focus-within/card:opacity-100 group-has-[.project-card-overlay-link:focus-visible]/card:opacity-100 lg:text-right"
                    aria-hidden="true"
                  >
                    View case study →
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </article>
    </div>
  );

  if (reduceMotion) {
    return <div className="min-w-0">{content}</div>;
  }

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="min-w-0"
    >
      {content}
    </motion.div>
  );
};

export default ProjectCard;
