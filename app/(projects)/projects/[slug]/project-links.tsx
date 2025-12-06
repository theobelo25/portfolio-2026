import { Github, Globe } from "lucide-react";

const ProjectLinks = ({
  links,
}: {
  links: { url: string; name: string }[];
}) => {
  return (
    <section>
      <ul className="flex gap-8 py-6">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              {link.name === "Website" ? <Globe /> : <Github />}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectLinks;
