import Link from "next/link";

import { Button } from "@/components/ui/button";
import { type Project } from "@/types";
import ProjectCard, {
  type ProjectTitleHeadingLevel,
} from "./project-card";

export default function Projects({
  projects,
  titleHeadingLevel = 2,
  emptyFilterTag = null,
  cmsUnavailable = false,
  cmsDataRejected = false,
}: {
  projects: Project[];
  titleHeadingLevel?: ProjectTitleHeadingLevel;
  /**
   * When filtering returned no rows, pass the active tag label so empty state can
   * offer clearing the filter (`/work`). Omit when CMS has no projects at all.
   */
  emptyFilterTag?: string | null;
  /** CMS fetch failed; empty list is not the same as “no projects in Directus”. */
  cmsUnavailable?: boolean;
  /** CMS responded but every item failed validation. */
  cmsDataRejected?: boolean;
}) {
  if (projects.length === 0) {
    return (
      <div
        className="grid grid-cols-1 gap-4 pb-8"
        role="status"
        aria-live="polite"
      >
        {cmsUnavailable && !emptyFilterTag ? (
          <p className="col-span-full text-center font-questrial text-muted-foreground">
            Projects could not be loaded. Refresh the page or try again later.
          </p>
        ) : cmsDataRejected && !emptyFilterTag ? (
          <p className="col-span-full text-center font-questrial text-muted-foreground">
            Projects could not be read correctly. The CMS responded, but nothing
            passed validation—refresh or check the content model.
          </p>
        ) : emptyFilterTag ? (
          <div className="col-span-full mx-auto flex max-w-md flex-col items-center gap-4 px-4 text-center">
            <p className="font-questrial text-muted-foreground">
              Nothing matches the{" "}
              <span className="font-medium text-foreground">{emptyFilterTag}</span>{" "}
              tag right now. Pick another chip or reset to see everything.
            </p>
            <Button variant="outline" size="sm" className="font-play" asChild>
              <Link href="/work">Clear filter</Link>
            </Button>
          </div>
        ) : (
          <p className="col-span-full text-center font-questrial text-muted-foreground">
            No projects found
          </p>
        )}
      </div>
    );
  }

  return (
    <ul className="list-none grid grid-cols-1 gap-4 pb-8">
      {projects.map((project) => (
        <li key={project.slug} className="min-w-0">
          <ProjectCard
            project={project}
            titleHeadingLevel={titleHeadingLevel}
          />
        </li>
      ))}
    </ul>
  );
}
