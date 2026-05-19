import { Button } from "@/components/ui/button";
import { type Project } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectFooterCtas = ({ nextProject }: { nextProject: Project | null }) => {
  return (
    <footer className="space-y-6 border-t border-border/60 pt-16">
      <p className="font-questrial text-xs uppercase tracking-wide text-muted-foreground">
        Continue
      </p>
      <div className="flex flex-wrap gap-3">
        {nextProject ? (
          <Button
            variant="outline"
            size="lg"
            className="font-play max-w-full shadow-sm transition-shadow duration-200 hover:shadow-md"
            asChild
          >
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex max-w-full items-center gap-2"
            >
              <span className="truncate">
                Next: {nextProject.title}
              </span>
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            size="lg"
            className="font-play shadow-sm transition-shadow duration-200 hover:shadow-md"
            asChild
          >
            <Link href="/work">View all work</Link>
          </Button>
        )}
        <Button variant="default" size="lg" className="font-play" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </footer>
  );
};

export default ProjectFooterCtas;
