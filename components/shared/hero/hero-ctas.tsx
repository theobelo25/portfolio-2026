import { Button } from "@/components/ui/button";
import { APP_NAME, RESUME_HREF } from "@/lib/constants";
import Link from "next/link";

const HeroCtas = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default" size="lg" className="font-play" asChild>
        <Link href="/work">View my work</Link>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <Link
          href={RESUME_HREF}
          download
          prefetch={false}
          aria-label={`Download ${APP_NAME}'s resume (PDF)`}
        >
          Download CV
        </Link>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <Link href="/contact">Contact</Link>
      </Button>
    </div>
  );
};

export default HeroCtas;
