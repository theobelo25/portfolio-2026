// HERO
export const HERO_MOTION_VARIANTS = {
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

// WORK PAGE
export const FILTER_VARIANTS = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export const PROJECT_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};
export const ABOUT_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const pageTransitionEase = [0.22, 1, 0.36, 1] as const;

export const PAGE_TRANSITION_VARIANTS = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.175, ease: pageTransitionEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.1, ease: pageTransitionEase },
  },
};
