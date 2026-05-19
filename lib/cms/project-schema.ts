import { z } from "zod";
import { type Project } from "@/types";

const projectLinkSchema = z.object({
  url: z.string(),
  name: z.string(),
});

const stackItemSchema = z.object({
  name: z.string(),
  type: z.string(),
});

const challengeSchema = z.object({
  title: z.string(),
  description: z.string(),
});

/** Runtime validation for Directus `projects` items — catches schema drift early. */
export const projectSchema = z.object({
  id: z.coerce.number(),
  title: z.string().min(1),
  slug: z.string().min(1),
  image: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  tags: z.array(z.string()).default([]),
  is_featured: z.boolean().optional(),
  links: z.array(projectLinkSchema).nullish(),
  stack: z.array(stackItemSchema).optional(),
  challenges: z.array(challengeSchema).optional(),
  learning: z.string().optional(),
  role: z.string().nullish(),
  employer: z.string().nullish(),
  team_context: z.string().nullish(),
  slice: z.string().nullish(),
  timeline: z.string().nullish(),
  engagement: z.string().nullish(),
});

const projectTagsOnlySchema = z.object({
  tags: z.array(z.string()).default([]),
});

function logInvalidProject(context: string, error: z.ZodError) {
  if (process.env.NODE_ENV !== "development") return;
  console.warn(`[cms] invalid project (${context})`, error.flatten());
}

export function parseProject(data: unknown, context = "item"): Project | undefined {
  const result = projectSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
  logInvalidProject(context, result.error);
  return undefined;
}

export type ParseListResult<T> = {
  items: T;
  rawCount: number;
  parsedCount: number;
};

export function parseProjects(data: unknown): ParseListResult<Project[]> {
  if (!Array.isArray(data)) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[cms] projects response is not an array");
    }
    return { items: [], rawCount: 0, parsedCount: 0 };
  }

  const projects: Project[] = [];
  for (const [index, item] of data.entries()) {
    const parsed = parseProject(item, `index ${index}`);
    if (parsed) {
      projects.push(parsed);
    }
  }
  return {
    items: projects,
    rawCount: data.length,
    parsedCount: projects.length,
  };
}

export function mergeTagsFromProjects(
  data: unknown,
): ParseListResult<string[]> {
  if (!Array.isArray(data)) {
    return { items: [], rawCount: 0, parsedCount: 0 };
  }

  const tags = new Set<string>();
  let parsedCount = 0;
  for (const [index, item] of data.entries()) {
    const result = projectTagsOnlySchema.safeParse(item);
    if (result.success) {
      parsedCount += 1;
      for (const tag of result.data.tags) {
        if (tag.trim()) tags.add(tag);
      }
      continue;
    }
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[cms] invalid tags payload (index ${index})`,
        result.error.flatten(),
      );
    }
  }
  return {
    items: [...tags].sort((a, b) => a.localeCompare(b)),
    rawCount: data.length,
    parsedCount,
  };
}
