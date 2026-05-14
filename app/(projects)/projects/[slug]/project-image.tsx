import { Card, CardContent } from "@/components/ui/card";
import { createImageUrl } from "@/lib/utils";
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
      <CardContent className="p-0 px-0">
        {image && (
          <div className="relative aspect-video w-full">
            <Image
              src={createImageUrl(image)}
              alt={`${projectName} featured image`}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectImage;
