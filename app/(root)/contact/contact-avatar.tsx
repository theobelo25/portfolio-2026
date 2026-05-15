"use client";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import { motion } from "framer-motion";
import trueMe from "@/public/images/avatars/theo-profile.webp";

const ContactAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center col-span-1">
      <HeroAvatar avatar={trueMe} />
      <motion.h2
        className="text-2xl font-press-start mt-10 text-center font-normal"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        Thank you for visiting!
      </motion.h2>
    </div>
  );
};

export default ContactAvatar;
