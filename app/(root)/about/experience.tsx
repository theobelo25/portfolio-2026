import { ABOUT_VARIANTS } from "@/components/shared/motion/variants";
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import Company from "./company";

const Experience = () => {
  return (
    <motion.div variants={ABOUT_VARIANTS as Variants} className="col-span-1">
      <h2 className="font-play mb-4 text-2xl">Experience</h2>
      <Card className="aspect-square">
        <CardContent>
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
    </motion.div>
  );
};

export default Experience;
