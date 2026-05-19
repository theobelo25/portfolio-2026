import { Card, CardContent } from "@/components/ui/card";

export type SkillCategory = {
  title: string;
  readonly items: readonly string[];
};

const Skills = ({ categories }: { categories: readonly SkillCategory[] }) => {
  return (
    <>
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
    </>
  );
};

export default Skills;
