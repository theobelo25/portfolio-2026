"use client";

import ProjectCardAffordances from "@/components/shared/projects/project-card-affordances";
import ProjectTagChips from "@/components/shared/projects/project-tag-chips";
import {
  STAGGER_CONTAINER_VARIANTS,
  STAGGER_ITEM_VARIANTS,
} from "@/components/shared/motion/variants";
import { isProfessionalProject } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { type ProjectLink } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import ProjectImage from "./project-image";

function formatEngagementLabel(engagement: string): string {
  const normalized = engagement.trim().toLowerCase();
  if (normalized === "personal") return "Personal project";
  return engagement.trim();
}

function ProjectMetaChips({
  timeline,
  engagement,
}: {
  timeline?: string | null;
  engagement?: string | null;
}) {
  const engagementLabel =
    engagement &&
    !isProfessionalProject(engagement) &&
    engagement.trim().length > 0
      ? formatEngagementLabel(engagement)
      : null;
  const items = [timeline, engagementLabel].filter(
    (value): value is string =>
      typeof value === "string" && value.trim().length > 0,
  );
  if (items.length === 0) return null;

  return (
    <p className="font-questrial text-sm text-muted-foreground">
      {items.join(" · ")}
    </p>
  );
}

const ProjectHeader = ({
  title,
  shortDescription,
  image,
  imageBlurDataURL,
  tags,
  links,
  timeline,
  engagement,
  className,
}: {
  title: string;
  shortDescription?: string | null;
  image: string | null;
  imageBlurDataURL?: string;
  tags: string[];
  links?: ProjectLink[] | null;
  timeline?: string | null;
  engagement?: string | null;
  className?: string;
}) => {
  const reduceMotion = useReducedMotion() ?? false;

  const titleBlock = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <h1 className="font-play text-4xl leading-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <ProjectCardAffordances
        links={links}
        className="shrink-0 justify-start sm:justify-end"
      />
    </div>
  );

  const imageBlock = (
    <ProjectImage
      projectName={title}
      image={image}
      imageBlurDataURL={imageBlurDataURL}
    />
  );

  const metaBlock = (
    <div className="flex flex-col gap-6">
      {shortDescription ? (
        <p className="max-w-3xl font-questrial text-base leading-relaxed text-muted-foreground sm:text-lg">
          {shortDescription}
        </p>
      ) : null}
      <ProjectMetaChips timeline={timeline} engagement={engagement} />
      <ProjectTagChips tags={tags} />
    </div>
  );

  if (reduceMotion) {
    return (
      <header className={cn("flex w-full flex-col gap-6", className)}>
        {titleBlock}
        {imageBlock}
        {metaBlock}
      </header>
    );
  }

  return (
    <motion.header
      className={cn("flex w-full flex-col gap-6", className)}
      initial="hidden"
      animate="visible"
      variants={STAGGER_CONTAINER_VARIANTS}
    >
      <motion.div variants={STAGGER_ITEM_VARIANTS}>{titleBlock}</motion.div>
      <motion.div variants={STAGGER_ITEM_VARIANTS}>{imageBlock}</motion.div>
      <motion.div variants={STAGGER_ITEM_VARIANTS}>{metaBlock}</motion.div>
    </motion.header>
  );
};

export default ProjectHeader;
