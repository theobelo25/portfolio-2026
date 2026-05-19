import { sanitizeProjectHtml } from "@/lib/cms/sanitize-html";
import { cn } from "@/lib/utils";

function looksLikeHtml(content: string) {
  return /<[a-z][\s\S]*>/i.test(content);
}

function toParagraphs(content: string): string[] {
  const normalized = content.replace(/\r\n/g, "\n").trim();
  if (!normalized) return [];

  const blocks = normalized.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  if (blocks.length > 1) return blocks;

  return normalized
    .split(/\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

const ProjectProse = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  const trimmed = content?.trim() ?? "";
  if (!trimmed) return null;

  const proseClass = cn(
    "project-prose prose prose-lg max-w-none",
    className,
  );

  if (looksLikeHtml(trimmed)) {
    return (
      <div
        className={proseClass}
        dangerouslySetInnerHTML={{ __html: sanitizeProjectHtml(trimmed) }}
      />
    );
  }

  const paragraphs = toParagraphs(trimmed);
  if (paragraphs.length === 0) return null;

  return (
    <div className={proseClass}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectProse;
