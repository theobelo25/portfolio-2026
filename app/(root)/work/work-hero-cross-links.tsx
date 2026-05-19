import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_NAME, GITHUB_URL } from "@/lib/constants";

/** Quick paths from the Work hero for reviewers with limited time. */
const WorkHeroCrossLinks = () => {
  return (
    <nav
      aria-label="Quick links"
      className="flex flex-wrap justify-center gap-3 pt-4"
    >
      <Button variant="default" size="lg" className="font-play" asChild>
        <Link href="/contact">Contact</Link>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <Link href="/about">About & CV</Link>
      </Button>
      <Button variant="outline" size="lg" className="font-play" asChild>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${APP_NAME} on GitHub (opens in a new tab)`}
        >
          GitHub
        </a>
      </Button>
    </nav>
  );
};

export default WorkHeroCrossLinks;
