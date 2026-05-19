const ProjectSectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => {
  return (
    <header className="space-y-2">
      <p className="font-questrial text-xs uppercase tracking-wide text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-play text-2xl leading-tight sm:text-3xl">{title}</h2>
    </header>
  );
};

export default ProjectSectionHeading;
