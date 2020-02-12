import styled, { css } from "styled-components";
import { content } from "./Container";
import { tracking } from "../../utils";

export const H1 = styled.h1(
  ({ theme }) => css`
    ${content};
    margin: calc((${theme.fontSizes.title} * 0.5) / 2) 0;
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.weights.extrabold};
    letter-spacing: ${tracking(80)};
    text-transform: uppercase;
  `
);

export const H2 = styled.h2(
  ({ theme }) => css`
    ${content};
    margin: calc((${theme.fontSizes.title} * 1.25) / 2) 0;
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.weights.regular};
    font-style: italic;
    letter-spacing: ${tracking(80)};
    text-transform: uppercase;
  `
);

export const H3 = styled.h3(
  ({ theme }) => css`
    ${content};
    margin: calc((${theme.fontSizes.subtitle} * 1.5) / 2) 0;
    font-size: ${theme.fontSizes.subtitle};
    font-weight: ${theme.weights.bold};
    letter-spacing: ${tracking(40)};
    text-transform: uppercase;
  `
);

export const H4 = styled.h4(
  ({ theme }) => css`
    ${content};
    margin: calc(${theme.fontSizes.headline} / 2) 0;
    font-size: ${theme.fontSizes.headline};
    color: ${theme.colors.secondary.normal};
    font-weight: ${theme.weights.regular};
    text-transform: uppercase;
  `
);

export const H5 = styled.h5(
  ({ theme }) => css`
    ${content};
    margin: calc((${theme.fontSizes.form} * 0.75) / 2) 0;
    font-size: ${theme.fontSizes.form};
    font-style: italic;
  `
);

export const H6 = styled.h6(
  ({ theme }) => css`
    ${content};
    margin: calc((${theme.fontSizes.body} * 1.5) / 2) 0;
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.grays[800]};
    font-style: italic;
    font-weight: ${theme.weights.medium};
    text-transform: uppercase;
  `
);
