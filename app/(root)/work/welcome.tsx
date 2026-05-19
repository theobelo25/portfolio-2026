"use client";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import { WORK_PAGE_LEAD_LINE, WORK_PAGE_OUTCOMES_LINE } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import businessAvatar from "@/public/images/avatars/portfolio-avatar-business.webp";
import WorkHeroCrossLinks from "./work-hero-cross-links";

const Welcome = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      <motion.div
        className="order-2 md:order-1 col-span-1 md:col-span-4"
        initial={reduceMotion ? false : { opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.25,
          ease: "easeOut",
        }}
      >
        <h1 className="text-6xl font-play text-center pb-8 lg:pb-16">
          My Work
        </h1>
        <div className="mx-auto max-w-2xl space-y-4 text-center font-questrial">
          <p className="text-lg text-foreground md:text-xl">{WORK_PAGE_LEAD_LINE}</p>
          <p className="text-base text-muted-foreground">{WORK_PAGE_OUTCOMES_LINE}</p>
          <WorkHeroCrossLinks />
        </div>
      </motion.div>
      <HeroAvatar
        avatar={businessAvatar}
        className="order-1 md:order-2 max-sm:mb-5 col-span-2 self-center justify-self-center"
      />
    </div>
  );
};

export default Welcome;
