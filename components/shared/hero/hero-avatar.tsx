"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import casual from "@/public/images/avatars/portfolio-avatar-main.webp";
import trueMe from "@/public/images/avatars/theo-profile.webp";

const HeroAvatar = ({
  avatar,
  className,
  priority = false,
}: {
  avatar?: StaticImageData;
  className?: string;
  /** Use only for above-the-fold LCP images (e.g. home hero). */
  priority?: boolean;
}) => {
  const path = usePathname();
  const reduceMotion = useReducedMotion() ?? false;

  const src = avatar ?? casual;

  return (
    <motion.div
      layoutId={reduceMotion ? undefined : "avatar"}
      className={cn("aspect-square max-w-[300px] basis-[35%]", className)}
    >
      <Card className="aspect-square rounded-full overflow-hidden max-w-[300px] gap-0 py-0">
        <CardContent
          className={cn("p-0", avatar === trueMe ? "px-0" : "px-6")}
        >
          <motion.div
            key={path}
            className="w-full"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : undefined }}
          >
            <Image
              src={src}
              alt="A pixel art avatar of Theodore Belo"
              width={src.width}
              height={src.height}
              sizes="(max-width: 768px) 35vw, 300px"
              priority={priority}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HeroAvatar;
