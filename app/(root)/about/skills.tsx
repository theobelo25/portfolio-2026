import SkillsMotion from "./skills-motion";

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <SkillsMotion>
      <h2 className="font-press-start text-center">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <p className="font-questrial">{skill}</p>
          </li>
        ))}
      </ul>
    </SkillsMotion>
  );
};

export default Skills;
