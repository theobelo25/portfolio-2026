import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/**
 * Case-study figure with an optional caption in another locale (`lang` on figcaption).
 * Prefer CMS HTML with `<figure><figcaption lang="fr">` when content is editorial;
 * use this component for static MDX-style pages or demos.
 */
export default function BilingualFigure({
  src,
  alt,
  caption,
  captionLang,
  className,
  imageClassName,
  ...imageProps
}: {
  src: ImageProps["src"];
  alt: string;
  caption: string;
  captionLang?: string;
  className?: string;
  imageClassName?: string;
} & Omit<ImageProps, "src" | "alt" | "fill" | "className">) {
  return (
    <figure className={cn("my-8 space-y-3", className)}>
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-border",
          imageClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 896px, 100vw"
          {...imageProps}
        />
      </div>
      <figcaption
        lang={captionLang}
        className="font-questrial text-sm text-subtle"
      >
        {caption}
      </figcaption>
    </figure>
  );
}
