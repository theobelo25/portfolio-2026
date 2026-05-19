import { Card, CardContent } from "@/components/ui/card";
import Company from "./company";

const Experience = () => {
  return (
    <>
      <h2 className="font-play mb-4 text-2xl">Experience</h2>
      <Card>
        <CardContent>
          <Company
            name={"StellarGrade"}
            position={"Netsuite Consultant / SCA Developer"}
            location={"Montreal, Quebec"}
          />
          <Company
            name={"Forge Media & Design"}
            position={"Web Developer"}
            location={"Toronto, Ontario"}
          />
          <Company
            name={"Kenzerama Productions"}
            position={"Co-Owner / Videographer"}
            location={"Toronto, Ontario"}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Experience;
