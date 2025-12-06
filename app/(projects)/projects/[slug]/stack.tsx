import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AppWindow, Blocks, Database } from "lucide-react";
import Tags from "@/components/shared/projects/tags";

const Stack = ({
  stack,
  integrations,
}: {
  stack: { name: string; type: string }[];
  integrations: string[];
}) => {
  return (
    <section className="col-span-1">
      <Card>
        <CardTitle>
          <h2 className="font-play text-center">Tech Stack & Features</h2>
        </CardTitle>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <ul className="text-center space-y-8">
            {stack.map((tech) => (
              <li
                key={tech.name}
                className="flex flex-row items-center gap-3 text-xl font-questrial"
              >
                {tech.type === "frontend" ? (
                  <AppWindow size={48} className="mb-1" />
                ) : tech.type === "backend" ? (
                  <Database size={48} className="mb-1" />
                ) : (
                  <Blocks size={48} className="mb-1" />
                )}
                {tech.name}
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-play mb-4">Integrations:</h3>
            <Tags tags={integrations} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Stack;
