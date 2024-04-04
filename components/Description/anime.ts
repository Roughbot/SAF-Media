export const opacity = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  closed: {
    opacity: 0,
  },
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: any) => ({
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.1,
    },
  }),
  closed: {
    y: "100%",
  },
};
