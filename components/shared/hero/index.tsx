"use client";
import Header from "../header";
import { motion, stagger, useReducedMotion, Variants } from "framer-motion";
import { HERO_MOTION_VARIANTS } from "../motion/variants";
import { useState } from "react";
import HeroAvatar from "./hero-avatar";

const TITLE = "Hello! My name is";
const NAME = "Theodore Belo";
const WELCOME = "Welcome to my portfolio!";

const Hero = () => {
  const reduceMotion = useReducedMotion() ?? false;
  const [showEyebrow] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <section className="flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <HeroAvatar priority />
        <div className="basis-[60%]">
          <motion.span
            className="text-sm font-press-start"
            initial={reduceMotion ? "visible" : "hidden"}
            animate={showEyebrow ? "visible" : "hidden"}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { delayChildren: stagger(0.04) }
            }
            onAnimationComplete={() => {
              if (!reduceMotion) setShowName(true);
            }}
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
            <span className="sr-only">{NAME}</span>
            <motion.span
              initial={reduceMotion ? "visible" : "hidden"}
              animate={reduceMotion || showName ? "visible" : "hidden"}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { delayChildren: stagger(0.15) }
              }
              onAnimationComplete={() => {
                if (!reduceMotion) setShowWelcome(true);
              }}
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
              initial={reduceMotion ? "visible" : "hidden"}
              animate={reduceMotion || showWelcome ? "visible" : "hidden"}
              transition={reduceMotion ? { duration: 0 } : undefined}
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
