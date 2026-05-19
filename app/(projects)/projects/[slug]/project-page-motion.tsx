"use client";

import {
  STAGGER_CONTAINER_VARIANTS,
  STAGGER_ITEM_VARIANTS,
} from "@/components/shared/motion/variants";
import { motion, useReducedMotion } from "framer-motion";
import { Children } from "react";

const ProjectPageMotion = ({ children }: { children: React.ReactNode }) => {
  const reduceMotion = useReducedMotion() ?? false;
  const items = Children.toArray(children).filter(Boolean);

  if (reduceMotion) {
    return (
      <article className="flex flex-col gap-16">{items}</article>
    );
  }

  return (
    <motion.article
      className="flex flex-col gap-16"
      initial="hidden"
      animate="visible"
      variants={STAGGER_CONTAINER_VARIANTS}
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          variants={STAGGER_ITEM_VARIANTS}
          className="min-w-0"
        >
          {child}
        </motion.div>
      ))}
    </motion.article>
  );
};

export default ProjectPageMotion;
