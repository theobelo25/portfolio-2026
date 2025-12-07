import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Reflection = ({
  challenges,
  learning,
}: {
  challenges: { title: string; description: string }[];
  learning: string;
}) => {
  return (
    <section className="grid grid-cols-1 gap-8 col-span-1 lg:col-span-2">
      <Card className="col-span-1">
        <CardTitle>
          <h2 className="font-play text-center">Challenges</h2>
        </CardTitle>
        <CardContent>
          <ul className="space-y-4">
            {challenges?.map((challenge) => (
              <li key={challenge.title}>
                <h3 className="font-play">{challenge.title}</h3>
                <p className="font-questrial">{challenge.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardTitle>
          <h2 className="font-play text-center">What I Learned</h2>
        </CardTitle>
        <CardContent>
          <p>{learning}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Reflection;
