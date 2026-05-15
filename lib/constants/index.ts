export const APP_NAME = process.env.APP_NAME || "Theodore Belo";

/** Same asset as About / hero CTAs; override path if the PDF moves. */
export const RESUME_HREF = "/resume.pdf" as const;

/** Override with NEXT_PUBLIC_LINKEDIN_URL when the profile URL changes. */
export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
  "https://www.linkedin.com/in/theodore-belo";
