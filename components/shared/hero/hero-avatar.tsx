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
}: {
  avatar?: StaticImageData;
  className?: string;
}) => {
  const path = usePathname();
  const reduceMotion = useReducedMotion() ?? false;

  const image = (
    <Image
      src={avatar || casual}
      alt={"A pixel art avatar of Theodore Belo"}
      width={0}
      height={0}
      sizes="(max-width: 768px) 50vw, 300px"
      fetchPriority="high"
      loading="eager"
    />
  );

  const card = (
    <Card className="aspect-square rounded-full overflow-hidden max-w-[300px] py-0">
      <CardContent className={cn("", avatar === trueMe ? "px-0" : "px-6")}>
        {reduceMotion ? image : (
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {image}
          </motion.div>
        )}
      </CardContent>
    </Card>
  );

  if (reduceMotion) {
    return (
      <div
        className={cn("aspect-square max-w-[300px] basis-[35%]", className)}
      >
        {card}
      </div>
    );
  }

  return (
    <motion.div
      layoutId="avatar"
      className={cn("aspect-square max-w-[300px] basis-[35%]", className)}
      transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
    >
      {card}
    </motion.div>
  );
};

export default HeroAvatar;
