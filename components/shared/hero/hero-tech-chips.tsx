import ProjectTagChips from "@/components/shared/projects/project-tag-chips";
import { HERO_TECH_CHIPS } from "@/lib/constants";

const HeroTechChips = () => {
  return (
    <ProjectTagChips
      tags={[...HERO_TECH_CHIPS]}
      className="mt-3"
      label="Core technologies"
    />
  );
};

export default HeroTechChips;
