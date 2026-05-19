const ProjectOutcomeHighlight = ({ outcome }: { outcome: string }) => {
  const text = outcome.trim();
  if (!text) return null;

  return (
    <blockquote className="rounded-xl border border-border/60 border-l-4 border-l-primary bg-muted/40 px-4 py-3 font-questrial text-base leading-relaxed text-foreground not-italic dark:bg-muted/25">
      {text}
    </blockquote>
  );
};

export default ProjectOutcomeHighlight;
