import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { unstable_cache } from "next/cache";
import {
  CMS_REVALIDATE_SECONDS,
  CMS_TAG_PROJECTS,
  cmsProjectTag,
} from "@/lib/cms-cache";
import { type Project } from "@/types";
import { getErrorMessage } from "../utils";

async function fetchAllProjects(): Promise<Project[]> {
  try {
    return (await directus.request(readItems("projects"))) as Project[];
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export const getAllProjects = unstable_cache(
  fetchAllProjects,
  ["directus", "projects", "all"],
  {
    revalidate: CMS_REVALIDATE_SECONDS,
    tags: [CMS_TAG_PROJECTS],
  },
);

async function fetchAllTags(): Promise<string[]> {
  let tags: string[] = [];
  try {
    const data = await directus.request(
      readItems("projects", {
        fields: ["tags"],
      }),
    );
    data.forEach((project) => {
      tags = [...new Set([...tags, ...project.tags])];
    });
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
  return tags;
}

export const getAllTags = unstable_cache(
  fetchAllTags,
  ["directus", "projects", "tags"],
  {
    revalidate: CMS_REVALIDATE_SECONDS,
    tags: [CMS_TAG_PROJECTS],
  },
);

export async function getProject(slug: string) {
  return unstable_cache(
    async () => {
      try {
        const projects = await directus.request(
          readItems("projects", {
            filter: {
              slug: {
                _eq: slug,
              },
            },
          }),
        );
        return projects[0];
      } catch (error) {
        throw new Error(getErrorMessage(error));
      }
    },
    ["directus", "project", "by-slug", slug],
    {
      revalidate: CMS_REVALIDATE_SECONDS,
      tags: [CMS_TAG_PROJECTS, cmsProjectTag(slug)],
    },
  )();
}
