"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import casual from "@/public/images/portfolio-avatar-full.png";

const HeroAvatar = ({
  avatar,
  className,
}: {
  avatar?: StaticImageData;
  className?: string;
}) => {
  const path = usePathname();

  return (
    <motion.div
      layoutId="avatar"
      className={cn("aspect-square max-w-[300px] basis-[35%]", className)}
    >
      <Card className="aspect-square rounded-full overflow-hidden max-w-[300px] py-0">
        <CardContent className="px-6">
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={avatar || casual}
              alt={"A pixel art avatar of Theodore Belo"}
              width={0}
              height={0}
              sizes="100vw"
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HeroAvatar;
