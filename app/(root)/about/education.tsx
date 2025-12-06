import { Card, CardContent } from "@/components/ui/card";
import University from "./university";
import { motion, Variants } from "framer-motion";
import { ABOUT_VARIANTS } from "@/components/shared/motion/variants";

const Education = () => {
  return (
    <motion.div variants={ABOUT_VARIANTS as Variants} className="col-span-1">
      <Card className="aspect-square">
        <CardContent>
          <h2 className="font-play text-2xl mb-3">Education</h2>
          <University
            degree={"Master of Science in Education"}
            school={"Canisius College"}
            location={"Buffalo, New York"}
          />
          <University
            degree={"Bachelor of Commerce with Honours"}
            school={"York University"}
            location={"North York, Ontario"}
          />
          <University
            degree={"Front-end Development Certificate"}
            school={"Juno College"}
            location={"Toronto, On"}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Education;
