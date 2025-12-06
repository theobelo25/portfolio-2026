"use client";
import HeroActions from "./hero-actions";
import Header from "../header";
import { motion, stagger, Variants } from "framer-motion";
import { HERO_MOTION_VARIANTS } from "../motion/variants";
import { useState } from "react";
import HeroAvatar from "./hero-avatar";

const TITLE = "Hello! My name is";
const NAME = "Theodore Belo";
const WELCOME = "Welcome to my portfolio!";

const Hero = () => {
  const [showEyebrow] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <section className="flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <HeroAvatar />
        <div className="basis-[60%]">
          <motion.span
            className="text-sm font-press-start"
            initial="hidden"
            animate={showEyebrow ? "visible" : "hidden"}
            transition={{
              delayChildren: stagger(0.04),
            }}
            onAnimationComplete={() => setShowName(true)}
            aria-hidden
          >
            {TITLE.split("").map((c, i) => {
              return (
                <motion.span
                  key={i + c}
                  variants={HERO_MOTION_VARIANTS as Variants}
                >
                  {c}
                </motion.span>
              );
            })}
          </motion.span>
          <h1 className="text-6xl font-play mb-6">
            <motion.span
              initial="hidden"
              animate={showName ? "visible" : "hidden"}
              transition={{
                delayChildren: stagger(0.15),
              }}
              onAnimationComplete={() => setShowWelcome(true)}
              aria-hidden
            >
              {NAME.split("").map((c, i) => {
                return (
                  <motion.span
                    key={i + c}
                    variants={HERO_MOTION_VARIANTS as Variants}
                  >
                    {c}
                  </motion.span>
                );
              })}
            </motion.span>
          </h1>
          <span className="text-sm font-press-start">
            <motion.span
              initial="hidden"
              animate={showWelcome ? "visible" : "hidden"}
              aria-hidden
            >
              <motion.span variants={HERO_MOTION_VARIANTS as Variants}>
                {WELCOME}
              </motion.span>
            </motion.span>
          </span>
          <Header className="mt-8 md:ml-0" />
        </div>
      </div>
      {/* 
      <HeroActions /> */}
    </section>
  );
};

export default Hero;
