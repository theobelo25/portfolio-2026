/** Home hero highlights — subset of Languages & Frameworks below. */
export const HERO_TECH_CHIPS = [
  "Next.js",
  "TypeScript",
  "Angular",
  "NestJS",
  ".NET",
  "PostgreSQL",
  "Go",
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "Next.js",
      "Node.js (NestJS)",
      "ASP.NET Core",
      "Go",
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      "REST APIs",
      "JWT Auth (with refresh rotation)",
      "SOLID",
      "Clean Architecture",
      "Repository & Unit of Work",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Prisma", "EF Core", "SQL", "Migrations"],
  },
  {
    title: "DevOps & Tooling",
    items: ["Docker", "CI/CD", "Dokploy", "Logging (Pino, slog)"],
  },
  {
    title: "Testing",
    items: ["Jest", "Angular TestBed", "API/E2E testing"],
  },
] as const;
