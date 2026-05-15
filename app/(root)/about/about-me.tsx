import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { APP_NAME, RESUME_HREF } from "@/lib/constants";

const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col items-center col-span-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-play">About Me</h1>
      <p className="py-6">
        I’m a full-stack web developer with 5+ years of experience building
        responsive, user-focused applications. I work across the stack, from
        intuitive front-end interfaces to scalable backend services, using
        technologies like Angular, React, TypeScript, Node.js, .NET, and
        SQL/PostgreSQL. I enjoy turning complex requirements into clean,
        reliable, and maintainable solutions. I’ve collaborated with designers,
        product leads, QA teams, and clients to deliver polished products that
        solve real problems. I’m passionate about writing high-quality code,
        continuously improving my craft, and building software that’s both
        practical and thoughtful.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <FileText
          className="size-8 shrink-0 sm:size-10 md:size-12"
          aria-hidden
        />
        <Link
          href={RESUME_HREF}
          download
          prefetch={false}
          className="font-questrial text-xl inline-flex items-center gap-2"
          aria-label={`Download ${APP_NAME}'s resume (PDF)`}
        >
          Download CV
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutMe;
