import styled, { css } from "styled-components";
import BaseImg from "gatsby-image";

export const Img = styled(BaseImg)(() => css``);

export const Figure = styled.figure(
  ({ theme }) => css`
    grid-column: full;
    width: 100%;
    max-width: 50em;
    margin: calc((${theme.fontSizes.tiny} * 1.5) / 2) auto;
  `
);

export const Caption = styled.figcaption(
  ({ theme }) => css`
    max-width: 40ch;
    margin: 0 auto;
    margin-top: calc(${theme.fontSizes.tiny} * 1.25);
    color: ${theme.colors.grays[800]};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.light};
    font-style: italic;
    text-align: center;
  `
);
