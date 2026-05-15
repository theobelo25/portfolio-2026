import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export type SkillCategory = {
  title: string;
  readonly items: readonly string[];
};

const Skills = ({ categories }: { categories: readonly SkillCategory[] }) => {
  return (
    <motion.div
      className="col-span-1 w-full md:col-span-4 max-sm:py-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h2 className="font-play mb-4 text-2xl">Skills</h2>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <Card key={category.title}>
            <CardContent>
              <h3 className="font-play mb-3 text-xl">{category.title}</h3>
              <ul className="list-inside list-disc space-y-1 text-left">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="font-questrial">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
