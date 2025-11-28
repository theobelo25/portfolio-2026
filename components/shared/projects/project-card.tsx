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

const ProjectCard = ({
  project,
}: {
  project: {
    slug: string;
    title: string;
    image: string;
    description: string;
    tags: string[];
  };
}) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        key={project.slug}
        className="aspect-square"
        variants={PROJECT_VARIANTS as Variants}
      >
        <Card className="relative w-full h-full justify-between">
          <Image
            src={project.image}
            alt={`${project.title} featured image`}
            className="absolute left-[50%] top-[50%] -translate-[50%]"
            width={0}
            height={0}
            sizes="100vw"
          />
          <CardHeader>
            <h1 className="font-play text-4xl">{project.title}</h1>
          </CardHeader>
          <CardContent>
            <p className="font-questrial text-2xl">{project.description}</p>
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
