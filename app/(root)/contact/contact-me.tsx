import { ExternalLink, Github, Mail } from "lucide-react";
import ContactMeMotion from "./contact-me-motion";

const ContactMe = () => {
  return (
    <ContactMeMotion>
      <h1 className="text-5xl font-play text-center">Contact Me</h1>
      <div className="h-full py-10 flex flex-col justify-center items-center gap-4">
        <Mail size={70} aria-hidden="true" />
        <a
          className="font-questrial text-xl mb-10"
          href="mailto:theo.belo25@gmail.com"
        >
          Email Theodore
        </a>
        <Github size={70} aria-hidden="true" />
        <a
          href="https://github.com/theobelo25/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Theodore on GitHub (opens in a new tab)"
          className="font-questrial text-xl inline-flex items-center gap-1"
        >
          View Theodore on GitHub
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </ContactMeMotion>
  );
};

export default ContactMe;
