export type ProjectLink = {
  url: string;
  name: string;
};

export type Project = {
  id: number;
  title: string;
  slug: string;
  image: string;
  /** Base64 data URL from a tiny Directus transform; optional blur placeholder for next/image. */
  imageBlurDataURL?: string;
  description: string;
  shortDescription: string;
  tags: string[];
  is_featured?: boolean;
  links?: ProjectLink[] | null;
  stack?: { name: string; type?: string }[];
  challenges?: { title: string; description: string }[];
  learning?: string | null;
  role?: string | null;
  employer?: string | null;
  team_context?: string | null;
  slice?: string | null;
  timeline?: string | null;
  engagement?: string | null;
};
