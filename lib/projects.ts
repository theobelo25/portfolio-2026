/** CMS `engagement` value for client/employer work (role, team, slice fields apply). */
export const ENGAGEMENT_PROFESSIONAL = "professional";

export function isProfessionalProject(engagement?: string | null): boolean {
  return engagement?.trim().toLowerCase() === ENGAGEMENT_PROFESSIONAL;
}
