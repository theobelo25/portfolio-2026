import ProjectOutcomeHighlight from "./project-outcome-highlight";
import ProjectProse from "./project-prose";
import ProjectSection from "./project-section";
import ProjectSectionHeading from "./project-section-heading";

const Description = ({
  description,
  outcome,
}: {
  description: string;
  outcome?: string | null;
}) => {
  const hasBody = Boolean(description?.trim());
  const hasOutcome = Boolean(outcome?.trim());

  if (!hasBody && !hasOutcome) return null;

  return (
    <ProjectSection divided>
      <ProjectSectionHeading eyebrow="Context" title="Overview" />
      {hasOutcome ? (
        <ProjectOutcomeHighlight outcome={outcome as string} />
      ) : null}
      {hasBody ? <ProjectProse content={description} /> : null}
    </ProjectSection>
  );
};

export default Description;
