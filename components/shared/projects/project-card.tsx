import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";
import { slugify, createImageUrl } from "@/lib/utils";
import { type Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${slugify(project.title)}`}>
      <article className="aspect-square">
        <Card className="relative w-full h-full flex-col justify-between overflow-hidden gap-0">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src={createImageUrl(project.image)}
              alt={`${project.title} featured image`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-25"
            />
          </div>
          <CardHeader>
            <h2 className="font-play text-4xl">{project.title}</h2>
          </CardHeader>
          <CardContent>
            <p className="font-questrial text-lg md:text-base lg:text-xs min-[1200px]:text-base">
              {project.shortDescription}
            </p>
          </CardContent>
          {project.tags && (
            <CardFooter>
              <Tags tags={project.tags} />
            </CardFooter>
          )}
        </Card>
      </article>
    </Link>
  );
};

export default ProjectCard;
