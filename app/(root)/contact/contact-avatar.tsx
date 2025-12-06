"use client";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import { motion } from "framer-motion";
import trueMe from "@/public/images/theo-profile.webp";

const ContactAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center col-span-1">
      <HeroAvatar avatar={trueMe} />
      <motion.p
        className="text-2xl font-press-start mt-10 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Thank you for visiting!
      </motion.p>
    </div>
  );
};

export default ContactAvatar;
