import Tag from "./tag";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-y-1 gap-x-2 lg:gap-y-2 lg:gap-x-3">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </ul>
  );
};

export default Tags;
