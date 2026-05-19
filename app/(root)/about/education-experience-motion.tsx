"use client";

import { ABOUT_VARIANTS } from "@/components/shared/motion/variants";
import { motion, stagger, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  education: ReactNode;
  experience: ReactNode;
};

export default function EducationExperienceMotion({
  education,
  experience,
}: Props) {
  return (
    <motion.div
      className="col-span-1 flex w-full flex-col gap-4 md:col-span-2 md:mx-auto md:max-w-[300px] md:justify-self-center"
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: stagger(0.1) }}
    >
      <motion.div variants={ABOUT_VARIANTS as Variants} className="col-span-1">
        {education}
      </motion.div>
      <motion.div variants={ABOUT_VARIANTS as Variants} className="col-span-1">
        {experience}
      </motion.div>
    </motion.div>
  );
}
