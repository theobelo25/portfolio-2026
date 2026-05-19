import { GITHUB_URL_DEFAULT, LINKEDIN_URL_DEFAULT } from "@/lib/site";

export const APP_NAME = process.env.APP_NAME || "Theodore Belo";

/** Shown under your name on the home hero. */
export const ROLE = "Full-stack web developer";

/** Years of professional experience (keep About copy in sync). */
export const YEARS_EXPERIENCE = 6;

/** One line under role on the home hero. */
export const HERO_EXPERIENCE_LINE = `${YEARS_EXPERIENCE}+ years across e-commerce platforms, enterprise scripting, and marketing web`;

/** One-line value prop on the home hero (breadth; specifics in HERO_TECH_CHIPS). */
export const HERO_VALUE_LINE =
  "SuiteCommerce and NetSuite automation over client datasets spanning millions of rows; marketing experiences with Canadian EN/FR localization and launch discipline—greenfield or legacy, trunk-based CI.";

/** Work page (/work): stacks + engagement types tied to showcased projects—not the homepage bio line. */
export const WORK_PAGE_LEAD_LINE =
  `${ROLE}: every card below ties a shipped project to the tooling behind it—Next.js and TypeScript, Angular, NestJS, .NET, PostgreSQL, Go, and Docker-backed CI.`;

/** Work page: points visitors from project list to outcome-focused write-ups. */
export const WORK_PAGE_OUTCOMES_LINE =
  "Each listing links to a case study detailing shipped scope, constraints, outcomes where they mattered, and concrete technology choices.";

/** Availability and work arrangement (hero + about). */
export const AVAILABILITY_LINE =
  "Open to full-time and contract roles; remote or hybrid; based in Toronto, Ontario.";

/** Contact page: roles and engagement types you're pursuing (hiring outreach). */
export const CONTACT_HIRING_FOCUS_LINE =
  "I'm especially interested in full-stack engineering, product engineering, and platform or internal-tools roles where shipping and iteration matter.";

/** Contact page: what to include in a first recruiting note. */
export const CONTACT_HIRING_OUTREACH_LINE =
  "For recruiting or hiring-manager outreach, a role title and brief team context help me respond quickly. In your first note, include the primary stack and any timeline or start window if you have one.";

/** Contact page: reply-time expectation for professional outreach. */
export const CONTACT_RESPONSE_EXPECTATION_LINE =
  "I typically reply within two business days.";

/** Contact page sidebar: one-line differentiator for full-stack hiring. */
export const CONTACT_SIDEBAR_DIFFERENTIATOR_LINE = `${YEARS_EXPERIENCE}+ years shipping full-stack web—UI, APIs, and data—on product and platform teams, greenfield or legacy.`;

/** Contact page sidebar: micro trust line before the Work link. */
export const CONTACT_SIDEBAR_WORK_LEAD_IN =
  "Case studies on";

/** Contact page sidebar: micro trust line after the Work link. */
export const CONTACT_SIDEBAR_WORK_TAIL =
  "include stack, constraints, and outcomes.";

export { HERO_TECH_CHIPS, SKILL_CATEGORIES } from "./skills";

/** Same asset as About / hero CTAs; override path if the PDF moves. */
export const RESUME_HREF = "/resume.pdf" as const;

/** Portfolio contact email (Contact page + mailto CTAs). */
export const CONTACT_EMAIL = "theo.belo25@gmail.com";

/** Override with `NEXT_PUBLIC_LINKEDIN_URL` when the profile URL changes. */
export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || LINKEDIN_URL_DEFAULT;

/** Override with `NEXT_PUBLIC_GITHUB_URL` when the profile URL changes. */
export const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || GITHUB_URL_DEFAULT;

/** GitHub handle shown as a subtitle under the "GitHub" label (About + Contact). */
export const GITHUB_HANDLE = "@theobelo25";
