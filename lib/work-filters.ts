export type WorkSearchParams = {
  filter?: string | string[];
};

export function normalizeFilter(value: WorkSearchParams["filter"]): string | null {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return null;

  try {
    const decoded = decodeURIComponent(rawValue).trim();
    return decoded.length > 0 ? decoded : null;
  } catch {
    return null;
  }
}

export function resolveActiveFilter(
  normalizedFilter: string | null,
  tags: string[],
): string | null {
  if (!normalizedFilter || normalizedFilter === "All") {
    return null;
  }
  return tags.includes(normalizedFilter) ? normalizedFilter : null;
}

export function filterProjectsByTag<T extends { tags: string[] }>(
  projects: T[],
  activeFilter: string | null,
): T[] {
  if (!activeFilter) {
    return projects;
  }
  return projects.filter((project) => project.tags.includes(activeFilter));
}
