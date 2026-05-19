import { createImageUrl } from "@/lib/utils";
import Image from "next/image";

const ProjectImage = ({
  projectName,
  image,
  imageBlurDataURL,
}: {
  projectName: string;
  image: string | null;
  imageBlurDataURL?: string;
}) => {
  if (!image) return null;

  return (
    <figure className="group/hero-image relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-border/40 transition-shadow duration-200 motion-safe:group-hover/hero-image:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={createImageUrl(image)}
          alt={`${projectName} featured image`}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover transition-transform duration-300 motion-safe:group-hover/hero-image:scale-[1.02]"
          priority
          placeholder={imageBlurDataURL ? "blur" : undefined}
          blurDataURL={imageBlurDataURL}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent dark:from-black/50"
          aria-hidden="true"
        />
      </div>
    </figure>
  );
};

export default ProjectImage;
