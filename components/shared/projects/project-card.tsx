import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";
import { motion, Variants } from "framer-motion";
import { PROJECT_VARIANTS } from "../motion/variants";
import { Project } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const imageUrl = project.image
    ? urlFor(project.image)?.width(366).height(366).url()
    : null;

  return (
    <Link href={`/projects/${project.slug.current}`}>
      <motion.article
        key={project.slug.current}
        className="aspect-square"
        variants={PROJECT_VARIANTS as Variants}
      >
        <Card className="relative w-full h-full flex-col justify-between overflow-hidden gap-0">
          <Image
            src={imageUrl!}
            alt={`${project.title} featured image`}
            className="absolute left-[50%] top-[50%] z-0 -translate-[50%] w-full opacity-25"
            width={0}
            height={0}
            sizes="100vw"
          />
          <CardHeader>
            <h1 className="font-play text-4xl">{project.title}</h1>
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
      </motion.article>
    </Link>
  );
};

export default ProjectCard;
