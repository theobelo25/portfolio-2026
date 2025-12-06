import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ProjectImage = ({
  projectName,
  image,
}: {
  projectName: string;
  image: string | null;
}) => {
  return (
    <Card className="p-0 my-4 overflow-hidden">
      <CardContent className="p-0">
        {image && (
          <Image
            src={image!}
            alt={`${projectName} featured image`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectImage;
