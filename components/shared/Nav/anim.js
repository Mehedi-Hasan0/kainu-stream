// for viewport in
export const slide = {
  initial: {
    top: "-100vh",
  },
  enter: {
    top: "0",
    // [0.61, 1, 0.88, 1]
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    top: "100vh",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

// nav options animation props
export const navOptionVariant = {
  initial: {
    opacity: 0,
    x: 200,
  },
  enter: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      x: {
        duration: 1,
      },
      delay: 0.5 + i * 1, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    x: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

// heading variants
export const headingVariant = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1,
      },
      x: {
        duration: 1, // duration of x axis animation
        delay: 0.3 + i * 0.03, // incrementing delay for element
        ease: [0.215, 0.61, 0.355, 1],
      },
      delay: 0.5, // overall delay for the animation to start
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};
