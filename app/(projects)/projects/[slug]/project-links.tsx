import { ExternalLink, Github, Globe } from "lucide-react";

const ProjectLinks = ({
  links,
}: {
  links: { url: string; name: string }[];
}) => {
  return (
    <section>
      <ul className="flex gap-8 py-6">
        {links?.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
              aria-label={`${link.name} (opens in a new tab)`}
            >
              {link.name === "Website" ? (
                <Globe aria-hidden="true" />
              ) : (
                <Github aria-hidden="true" />
              )}
              {link.name}
              <ExternalLink className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectLinks;
