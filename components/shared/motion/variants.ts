// HERO
export const HERO_MOTION_VARIANTS = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// WORK PAGE
export const FILTER_VARIANTS = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
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
      duration: 0.3,
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
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
