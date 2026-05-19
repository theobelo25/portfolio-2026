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

export const PAGE_TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

const pageTransitionEase = PAGE_TRANSITION_EASE;

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

/** Project detail: staggered section enter (opacity + 8px), no scale. */
export const STAGGER_CHILD_DELAY = 0.06;

export const STAGGER_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: PAGE_TRANSITION_EASE },
  },
};

export const STAGGER_CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_CHILD_DELAY,
      delayChildren: 0.04,
    },
  },
};
