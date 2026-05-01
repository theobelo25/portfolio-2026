import Education from "./education";
import Experience from "./experience";
import StaggerTwoColumn from "./stagger-two-column";

export default function AboutEducationExperience() {
  return (
    <StaggerTwoColumn className="grid grid-cols-1 lg:grid-cols-2 col-span-4 gap-4">
      <Education />
      <Experience />
    </StaggerTwoColumn>
  );
}
