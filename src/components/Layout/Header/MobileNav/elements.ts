import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Hamburger } from "./Hamburger";

const circleClip = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at right 70px top 58px)`,
    transition: {
      type: `spring`,
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(34px at right 70px top 58px)`,
    transition: {
      delay: 0.5,
      type: `spring`,
      stiffness: 400,
      damping: 40
    }
  }
};

export const Backdrop = styled(motion.div).attrs({
  variants: circleClip
})(
  () => css`
    z-index: 8500;
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
  `
);

export const Container = styled(motion.div).attrs({
  variants: circleClip
})(
  () => css`
    z-index: 8750;
    position: relative;
    display: flex;
    width: calc(100% - 7.2rem);
    justify-content: center;
    align-items: center;
    margin: 2.4rem 3.6rem;
  `
);

export const Close = styled(Hamburger)(
  () => css`
    position: absolute;
    top: 0;
    right: 0;
  `
);

export const List = styled(motion.ul).attrs({
  variants: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }
})(
  () => css`
    display: grid;
    grid-gap: 2rem;
    padding: 0;
    margin: 0;
  `
);

export const Item = styled(motion.li).attrs({
  variants: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 }
})(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    padding: 0;
    margin: 0;
    list-style: none;
    cursor: pointer;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
    }
  `
);
