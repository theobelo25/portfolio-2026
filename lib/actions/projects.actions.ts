import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { type Project } from "@/types";
import { getErrorMessage } from "../utils";

export async function getAllProjects() {
  try {
    return (await directus.request(readItems("projects"))) as Project[];
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Directus] getAllProjects:", getErrorMessage(error));
    }
    return [];
  }
}

export async function getProject(slug: string) {
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
    if (process.env.NODE_ENV === "development") {
      console.warn("[Directus] getProject:", slug, getErrorMessage(error));
    }
    return undefined;
  }
}

export async function getAllTags() {
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
    if (process.env.NODE_ENV === "development") {
      console.warn("[Directus] getAllTags:", getErrorMessage(error));
    }
    return [];
  }

  return tags;
}
