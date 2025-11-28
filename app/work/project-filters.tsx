import { motion, stagger, Variants } from "framer-motion";
import { FILTER_VARIANTS } from "@/components/shared/motion/variants";

const TEMP_FILTERS = ["All", "Javascript", "Frontend", "Backend"];

const ProjectFilters = () => {
  return (
    <motion.ul
      className="flex gap-4 md:mt-8"
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: stagger(0.15),
      }}
    >
      {TEMP_FILTERS.map((filter) => (
        <motion.li key={filter} variants={FILTER_VARIANTS as Variants}>
          {filter}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProjectFilters;
