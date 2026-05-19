import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/actions/projects.actions";
import { absoluteUrl } from "@/lib/site";

/** Static sitemap with ISR (daily refresh). */
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: projects } = await getAllProjects();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/work"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: absoluteUrl(`/projects/${p.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
