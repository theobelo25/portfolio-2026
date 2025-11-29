import { Card, CardContent } from "@/components/ui/card";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <li className="font-press-start text-[0.5rem] lg:text-[0.5rem]">
      <Card className="py-1">
        <CardContent className="px-2">
          <p>{tag}</p>
        </CardContent>
      </Card>
    </li>
  );
};

export default Tag;
