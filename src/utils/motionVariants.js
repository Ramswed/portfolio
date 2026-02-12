const DEFAULT_EASE = [0.4, 0, 0.2, 1];

export const createContainerVariants = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
    },
  },
});

export const createItemVariants = (y = 30, duration = 0.6) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: DEFAULT_EASE,
    },
  },
});

export const createTitleVariants = (y = 20, duration = 0.8) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: DEFAULT_EASE,
    },
  },
});
