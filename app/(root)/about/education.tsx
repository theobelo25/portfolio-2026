import { Card, CardContent } from "@/components/ui/card";
import University from "./university";

const Education = () => {
  return (
    <>
      <h2 className="font-play mb-4 text-2xl">Education</h2>
      <Card>
        <CardContent>
          <University
            degree={"Front-end Development Certificate"}
            school={"Juno College"}
            location={"Toronto, On"}
          />
          <University
            degree={"Master of Science"}
            school={"Canisius College"}
            location={"Buffalo, New York"}
          />
          <University
            degree={"Bachelor of Commerce"}
            school={"York University"}
            location={"North York, Ontario"}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Education;
