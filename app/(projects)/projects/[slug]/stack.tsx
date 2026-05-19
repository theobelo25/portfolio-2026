import ProjectTagChips from "@/components/shared/projects/project-tag-chips";
import ProjectSection from "./project-section";
import ProjectSectionHeading from "./project-section-heading";

const STACK_GROUPS = [
  { type: "frontend", label: "Frontend" },
  { type: "backend", label: "Backend" },
  { type: "other", label: "Other" },
] as const;

function stackGroupKey(type?: string): (typeof STACK_GROUPS)[number]["type"] {
  if (type === "frontend" || type === "backend") return type;
  return "other";
}

function groupStack(stack: { name: string; type?: string }[]) {
  const groups = new Map<string, string[]>();
  for (const { name, type } of stack) {
    const key = stackGroupKey(type);
    const list = groups.get(key) ?? [];
    list.push(name);
    groups.set(key, list);
  }
  return groups;
}

const StackPillGroup = ({ label, items }: { label: string; items: string[] }) => {
  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="font-questrial text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <ul className="flex flex-wrap gap-1.5" aria-label={label}>
        {items.map((name) => (
          <li
            key={name}
            className="rounded-full border border-border/60 bg-muted/60 px-2.5 py-0.5 font-questrial text-xs text-muted-foreground"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Stack = ({
  stack,
  integrations,
}: {
  stack: { name: string; type?: string }[];
  integrations: string[];
}) => {
  const hasStack = stack?.length > 0;
  const hasIntegrations = integrations?.length > 0;

  if (!hasStack && !hasIntegrations) return null;

  const grouped = groupStack(stack ?? []);

  return (
    <div className="space-y-6">
      {hasStack ? (
        <ProjectSection divided={false}>
          <ProjectSectionHeading eyebrow="Built with" title="Tech stack" />
          <div className="space-y-6">
            {STACK_GROUPS.map(({ type, label }) => (
              <StackPillGroup
                key={type}
                label={label}
                items={grouped.get(type) ?? []}
              />
            ))}
          </div>
        </ProjectSection>
      ) : null}

      {hasIntegrations ? (
        <ProjectSection divided={hasStack}>
          <p className="font-questrial text-xs uppercase tracking-wide text-muted-foreground">
            Integrations
          </p>
          <ProjectTagChips tags={integrations} label="Integrations" />
        </ProjectSection>
      ) : null}
    </div>
  );
};

export default Stack;
