import directus from "@/lib/directus";
import {
  cmsUnavailable,
  type CmsFetchResult,
} from "@/lib/cms/fetch-result";
import { enrichProjectWithLqip, enrichProjectsWithLqip } from "@/lib/cms/lqip";
import { parseProject } from "@/lib/cms/project-schema";
import {
  resolveProjectListFetch,
  resolveTagsFetch,
} from "@/lib/cms/resolve-cms-list";
import { readItems } from "@directus/sdk";
import { unstable_cache } from "next/cache";
import {
  CMS_REVALIDATE_SECONDS,
  CMS_TAG_PROJECTS,
  cmsProjectTag,
} from "@/lib/cms-cache";
import { type Project } from "@/types";
import { getErrorMessage } from "../utils";

function logCmsFetchError(context: string, error: unknown) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`[cms] ${context}:`, getErrorMessage(error));
  }
}

async function fetchAllProjects(): Promise<CmsFetchResult<Project[]>> {
  try {
    const data = await directus.request(readItems("projects"));
    const resolved = resolveProjectListFetch(data, "fetchAllProjects");
    if (resolved.cmsDataRejected) {
      return resolved;
    }
    return {
      ...resolved,
      data: await enrichProjectsWithLqip(resolved.data),
    };
  } catch (error) {
    logCmsFetchError("fetchAllProjects", error);
    return cmsUnavailable([]);
  }
}

async function fetchFeaturedProjects(): Promise<CmsFetchResult<Project[]>> {
  try {
    const data = await directus.request(
      readItems("projects", {
        filter: {
          is_featured: {
            _eq: true,
          },
        },
      }),
    );
    const resolved = resolveProjectListFetch(data, "fetchFeaturedProjects");
    if (resolved.cmsDataRejected) {
      return resolved;
    }
    return {
      ...resolved,
      data: await enrichProjectsWithLqip(resolved.data),
    };
  } catch (error) {
    logCmsFetchError("fetchFeaturedProjects", error);
    return cmsUnavailable([]);
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

export const getFeaturedProjects = unstable_cache(
  fetchFeaturedProjects,
  ["directus", "projects", "featured"],
  {
    revalidate: CMS_REVALIDATE_SECONDS,
    tags: [CMS_TAG_PROJECTS],
  },
);

/**
 * Distinct tags derived from all projects. Fine at portfolio scale; if the
 * collection grows, prefer a Directus aggregate field or dedicated endpoint.
 */
async function fetchAllTags(): Promise<CmsFetchResult<string[]>> {
  try {
    const data = await directus.request(
      readItems("projects", {
        fields: ["tags"],
      }),
    );
    return resolveTagsFetch(data, "fetchAllTags");
  } catch (error) {
    logCmsFetchError("fetchAllTags", error);
    return cmsUnavailable([]);
  }
}

export const getAllTags = unstable_cache(
  fetchAllTags,
  ["directus", "projects", "tags"],
  {
    revalidate: CMS_REVALIDATE_SECONDS,
    tags: [CMS_TAG_PROJECTS],
  },
);

export async function getProject(slug: string): Promise<Project | undefined> {
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
        const project = parseProject(projects[0], slug);
        return project ? enrichProjectWithLqip(project) : undefined;
      } catch (error) {
        logCmsFetchError(`getProject(${slug})`, error);
        return undefined;
      }
    },
    ["directus", "project", "by-slug", slug],
    {
      revalidate: CMS_REVALIDATE_SECONDS,
      tags: [CMS_TAG_PROJECTS, cmsProjectTag(slug)],
    },
  )();
}
