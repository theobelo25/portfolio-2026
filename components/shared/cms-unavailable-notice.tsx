type CmsContentNoticeProps = {
  context?: "projects" | "featured";
  reason?: "unavailable" | "dataRejected";
};

const COPY = {
  unavailable: {
    projects:
      "Project content is temporarily unavailable. The rest of the site still works—try again in a moment.",
    featured:
      "Featured projects could not be loaded right now. You can still browse About and Contact, or try again shortly.",
  },
  dataRejected: {
    projects:
      "Project content could not be read correctly. The CMS responded, but nothing passed validation—try again shortly or check the content model.",
    featured:
      "Featured projects could not be read correctly. The CMS responded, but highlights failed validation—visit Work for other pages or try refreshing.",
  },
} as const;

export default function CmsUnavailableNotice({
  context = "projects",
  reason = "unavailable",
}: CmsContentNoticeProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 font-questrial text-sm text-foreground"
    >
      {COPY[reason][context]}
    </div>
  );
}
