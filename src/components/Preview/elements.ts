import styled, { css } from "styled-components";
import Img from "gatsby-image";

export const Container = styled.div(
  () => css`
    position: relative;
    display: grid;
    width: 100%;
    min-width: 30rem;
    height: 100%;
    max-height: 30rem;
    overflow: hidden;
  `
);

export const Overlay = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    border: none;
    color: ${theme.colors.white};
    text-decoration: none;

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      &:before {
        opacity: 0.4;
      }

      h3,
      span {
        opacity: 1;
      }
    }

    &::before {
      z-index: 100;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: ${theme.colors.secondary.normal};
      opacity: 0;
      transition: opacity 0.5s;
    }
  `
);

export const Image = styled(Img)(
  () => css`
    object-fit: cover;
    object-position: center center;
  `
);
