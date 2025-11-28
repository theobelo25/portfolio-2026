"use client";
import { Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.section
      className="col-span-1 py-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1 className="text-5xl font-play text-center">Contact Me</h1>
      <div className="h-full py-10 flex flex-col justify-center items-center gap-4">
        <Mail size={70} />
        <a
          className="font-questrial text-xl mb-10"
          href="mailto:theo.belo25@gmail.com"
        >
          theo.belo25@gmail.com
        </a>
        <Github size={70} />
        <a
          href="https://github.com/theobelo25/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-questrial text-xl"
        >
          https://github.com/theobelo25/
        </a>
      </div>
    </motion.section>
  );
};

export default ContactMe;
