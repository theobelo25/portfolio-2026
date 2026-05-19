import ProjectProse from "./project-prose";
import ProjectSection from "./project-section";
import ProjectSectionHeading from "./project-section-heading";

const Reflection = ({
  challenges,
  learning,
}: {
  challenges: { title: string; description: string }[];
  learning: string;
}) => {
  const hasChallenges = challenges?.length > 0;
  const hasLearning = typeof learning === "string" && learning.trim().length > 0;

  if (!hasChallenges && !hasLearning) return null;

  return (
    <>
      {hasChallenges ? (
        <ProjectSection>
          <ProjectSectionHeading eyebrow="Process" title="Challenges" />
          <ol className="space-y-8">
            {challenges.map((challenge, index) => (
              <li
                key={challenge.title}
                className="border-l-2 border-primary/55 pl-4"
              >
                <p className="mb-1.5 font-questrial text-xs tabular-nums uppercase tracking-wide text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-play text-lg leading-snug text-foreground">
                  {challenge.title}
                </h3>
                <p className="mt-1.5 font-questrial text-base leading-relaxed text-muted-foreground">
                  {challenge.description}
                </p>
              </li>
            ))}
          </ol>
        </ProjectSection>
      ) : null}

      {hasLearning ? (
        <ProjectSection>
          <ProjectSectionHeading eyebrow="Takeaways" title="What I learned" />
          <ProjectProse content={learning} />
        </ProjectSection>
      ) : null}
    </>
  );
};

export default Reflection;
