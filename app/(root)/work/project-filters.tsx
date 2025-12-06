"use client";
import { motion, stagger, Variants } from "framer-motion";
import { FILTER_VARIANTS } from "@/components/shared/motion/variants";
import FilterButton from "./filter-button";

const ProjectFilters = ({ filters }: { filters: string[] }) => {
  return (
    <motion.ul
      className="flex gap-4 flex-wrap md:mt-8"
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: stagger(0.15),
      }}
    >
      <motion.li variants={FILTER_VARIANTS as Variants}>
        <FilterButton filter={"All"} />
      </motion.li>
      {filters.map((filter) => (
        <motion.li key={filter} variants={FILTER_VARIANTS as Variants}>
          <FilterButton filter={filter} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProjectFilters;
