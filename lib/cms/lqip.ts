import { directusServerUrl } from "@/lib/directus-env";
import { createLqipUrl } from "@/lib/utils";
import { type Project } from "@/types";

const LQIP_FETCH_TIMEOUT_MS = 5_000;

async function fetchWithTimeout(
  url: string,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

/** Fetches a tiny Directus transform and returns a data URL for next/image blur placeholder. */
export async function fetchImageBlurDataUrl(
  imageIdOrUrl: string,
): Promise<string | undefined> {
  const lqipUrl = createLqipUrl(imageIdOrUrl, directusServerUrl());
  if (!lqipUrl) return undefined;

  try {
    const response = await fetchWithTimeout(lqipUrl, LQIP_FETCH_TIMEOUT_MS);
    if (!response.ok) return undefined;

    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length === 0) return undefined;

    const contentType =
      response.headers.get("content-type")?.split(";")[0]?.trim() ||
      "image/jpeg";
    return `data:${contentType};base64,${buffer.toString("base64")}`;
  } catch {
    return undefined;
  }
}

export async function enrichProjectWithLqip(project: Project): Promise<Project> {
  if (!project.image?.trim()) return project;

  const imageBlurDataURL = await fetchImageBlurDataUrl(project.image);
  if (!imageBlurDataURL) return project;

  return { ...project, imageBlurDataURL };
}

export async function enrichProjectsWithLqip(
  projects: Project[],
): Promise<Project[]> {
  return Promise.all(projects.map((project) => enrichProjectWithLqip(project)));
}
