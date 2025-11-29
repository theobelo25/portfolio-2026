import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col items-center col-span-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-5xl font-play">About Me</h1>
      <p className="py-6">
        I’m a full-stack web developer with over four years of experience
        building responsive, user-focused applications across the modern web
        stack. My work spans everything from clean, intuitive front-end
        interfaces to scalable backend systems built with tools like React,
        Node.js, TypeScript, and PostgreSQL. I enjoy turning complex
        requirements into reliable, maintainable solutions and have collaborated
        closely with designers, product leads, QA teams, and clients to bring
        polished digital products to life. I’m passionate about writing clean
        code, learning continuously, and delivering thoughtful engineering in
        every project I take on.
      </p>
      <Button variant={"outline"} asChild className="font-play mx-auto">
        <Link href={"/resume.pdf"} download prefetch={false}>
          Download CV
        </Link>
      </Button>
    </motion.div>
  );
};

export default AboutMe;
