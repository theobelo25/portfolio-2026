import { motion } from "framer-motion";

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <motion.div
      className="col-span-1 md:col-span-2 max-sm:py-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="font-press-start text-center">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <p className="font-questrial">{skill}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
