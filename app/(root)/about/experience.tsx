import { Card, CardContent } from "@/components/ui/card";
import Company from "./company";
import RevealSection from "./reveal-section";

const Experience = () => {
  return (
    <RevealSection className="col-span-1">
      <Card className="aspect-square">
        <CardContent>
          <h2 className="font-play text-2xl mb-3">Experience</h2>
          <Company
            name={"Kenzerama Productions"}
            position={"Co-Owner / Videographer"}
            location={"Toronto, Ontario"}
          />
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
        </CardContent>
      </Card>
    </RevealSection>
  );
};

export default Experience;
