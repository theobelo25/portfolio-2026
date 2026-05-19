import { type Project } from "@/types";

/** Directus collection map for `createDirectus<Schema>()`. */
export type DirectusSchema = {
  projects: Project[];
};
