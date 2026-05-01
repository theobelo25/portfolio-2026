import FilterButton from "./filter-button";

export default function ProjectFilters({ filters }: { filters: string[] }) {
  return (
    <ul className="flex gap-4 flex-wrap md:mt-8">
      <li>
        <FilterButton filter="All" />
      </li>
      {filters.map((filter) => (
        <li key={filter}>
          <FilterButton filter={filter} />
        </li>
      ))}
    </ul>
  );
}
