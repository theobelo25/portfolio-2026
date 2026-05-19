"use client";

import { motion, stagger, useReducedMotion, type Variants } from "framer-motion";
import { FILTER_VARIANTS } from "@/components/shared/motion/variants";
import FilterButton from "./filter-button";

function FilterItems({
  filters,
  activeFilter,
  Li,
}: {
  filters: string[];
  activeFilter: string | null;
  Li: typeof motion.li | "li";
}) {
  const ListItem = Li === "li" ? "li" : Li;

  return (
    <>
      <ListItem {...(Li === "li" ? {} : { variants: FILTER_VARIANTS as Variants })}>
        <FilterButton filter="All" isActive={activeFilter === null} />
      </ListItem>
      {filters.map((filter) => (
        <ListItem
          key={filter}
          {...(Li === "li" ? {} : { variants: FILTER_VARIANTS as Variants })}
        >
          <FilterButton filter={filter} isActive={activeFilter === filter} />
        </ListItem>
      ))}
    </>
  );
}

const ProjectFilters = ({
  filters,
  activeFilter,
}: {
  filters: string[];
  /** Canonical tag query or `null` when showing all (“All”). */
  activeFilter: string | null;
}) => {
  const reduceMotion = useReducedMotion() ?? false;
  const listClassName = "flex flex-wrap gap-2 md:gap-3";

  return (
    <nav aria-label="Filter projects by tag" className="md:mt-8">
      {reduceMotion ? (
        <ul className={listClassName}>
          <FilterItems
            filters={filters}
            activeFilter={activeFilter}
            Li="li"
          />
        </ul>
      ) : (
        <motion.ul
          className={listClassName}
          initial="hidden"
          animate="visible"
          transition={{
            delayChildren: stagger(0.075),
          }}
        >
          <FilterItems
            filters={filters}
            activeFilter={activeFilter}
            Li={motion.li}
          />
        </motion.ul>
      )}
    </nav>
  );
};

export default ProjectFilters;
