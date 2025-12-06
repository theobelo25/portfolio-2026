import Link from "next/link";

const FilterButton = ({ filter }: { filter: string }) => {
  return <Link href={`/work?filter=${filter}`}>{filter}</Link>;
};

export default FilterButton;
