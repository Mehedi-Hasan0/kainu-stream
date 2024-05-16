export const bannerTextVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 0.3,
      },
      y: {
        duration: 0.4,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const bannerImgVariant = {
  initial: {
    opacity: 0,
    x: 20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      opacity: {
        duration: 0.4,
      },
      x: {
        duration: 0.5,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const cardVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      delay: 0.5 + i * 0.3, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const textLeftVariant = {
  initial: {
    opacity: 0,
    x: -20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 0.3,
      },
      x: {
        duration: 0.4,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
