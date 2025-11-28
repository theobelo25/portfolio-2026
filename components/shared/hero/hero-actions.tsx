import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "../header";

const HeroActions = () => {
  return (
    <div className="flex justify-center basis-full gap-4">
      {/* <Button variant={"default"} asChild className="font-play">
        <Link href={"/about"}>About Me</Link>
      </Button>
      <Button variant={"outline"} asChild className="font-play">
        <Link href={"/resume.pdf"} download prefetch={false}>
          Download CV
        </Link>
      </Button> */}
      <Header />
    </div>
  );
};

export default HeroActions;
