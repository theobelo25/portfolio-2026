import { isProfessionalProject } from "@/lib/projects";
import ProjectSection from "./project-section";
import ProjectSectionHeading from "./project-section-heading";

function hasText(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const ProjectEngagement = ({
  engagement,
  role,
  employer,
  team_context,
  slice,
}: {
  engagement?: string | null;
  role?: string | null;
  employer?: string | null;
  team_context?: string | null;
  slice?: string | null;
}) => {
  if (!isProfessionalProject(engagement)) return null;

  const roleLine = [role, employer].filter(hasText);
  const details = [
    { term: "Team context", value: team_context },
    { term: "My contribution", value: slice },
  ].filter((item): item is { term: string; value: string } =>
    hasText(item.value),
  );

  if (roleLine.length === 0 && details.length === 0) return null;

  return (
    <ProjectSection divided={false}>
      <ProjectSectionHeading eyebrow="Engagement" title="Role & team" />
      {roleLine.length > 0 ? (
        <p className="font-play text-xl leading-snug text-foreground sm:text-2xl">
          {roleLine.join(" · ")}
        </p>
      ) : null}
      {details.length > 0 ? (
        <dl className="space-y-6">
          {details.map(({ term, value }) => (
            <div key={term}>
              <dt className="font-questrial text-xs uppercase tracking-wide text-muted-foreground">
                {term}
              </dt>
              <dd className="mt-2 font-questrial text-base leading-relaxed text-foreground">
                {value.trim()}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </ProjectSection>
  );
};

export default ProjectEngagement;
