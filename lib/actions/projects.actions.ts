import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { type Project } from "@/types";
import { getErrorMessage } from "../utils";

export async function getAllProjects() {
  // Fetch items from the 'posts' collection
  let projects: Project[];
  try {
    projects = (await directus.request(readItems("projects"))) as Project[];
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
  return projects;
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
    throw new Error(getErrorMessage(error));
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
    throw new Error(getErrorMessage(error));
  }

  return tags;
}
