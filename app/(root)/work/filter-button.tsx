import Link from "next/link";

import { Button } from "@/components/ui/button";

const FilterButton = ({
  filter,
  isActive,
}: {
  filter: string;
  isActive: boolean;
}) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      className="rounded-full border font-questrial font-normal tracking-normal shadow-none md:min-h-9 md:px-4"
      asChild
    >
      <Link
        href={
          filter === "All"
            ? "/work"
            : `/work?filter=${encodeURIComponent(filter)}`
        }
        scroll={false}
        aria-current={isActive ? "true" : undefined}
        prefetch
      >
        {filter}
      </Link>
    </Button>
  );
};

export default FilterButton;
