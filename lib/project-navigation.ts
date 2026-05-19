import { getAllProjects } from "@/lib/actions/projects.actions";
import { type Project } from "@/types";

export async function getAdjacentProject(
  slug: string,
): Promise<{ next: Project | null }> {
  try {
    const { data: projects } = await getAllProjects();
    const ordered = projects.filter(
      (p) => typeof p.slug === "string" && p.slug.length > 0,
    );
    const index = ordered.findIndex((p) => p.slug === slug);
    if (index === -1 || ordered.length <= 1) {
      return { next: null };
    }
    const nextIndex = (index + 1) % ordered.length;
    return { next: ordered[nextIndex] ?? null };
  } catch {
    return { next: null };
  }
}
