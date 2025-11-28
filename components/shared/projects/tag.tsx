import { Card, CardContent } from "@/components/ui/card";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <li className="font-press-start text-xs">
      <Card className="py-1">
        <CardContent>{tag}</CardContent>
      </Card>
    </li>
  );
};

export default Tag;
