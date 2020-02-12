import styled, { css } from "styled-components";
import { Button } from "../Button";
import { content } from "../Container";

export const Pre = styled.pre(
  ({ theme }) => css`
    ${content};
    position: relative;
    display: block;
    width: 95%;
    padding: 3rem 0;
    margin: 4rem auto;
    border-radius: 1rem;
    background-color: ${theme.colors.grays[200]};
    font-family: ${theme.fonts.code};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.light};
  `
);

export const Label = styled.span(
  ({ theme }) => css`
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    padding: 0.5rem 1.5rem;
    border: 0.1rem solid ${theme.colors.grays[500]};
    border-radius: ${theme.corners[0]};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.regular};
    text-transform: uppercase;
    user-select: none;
  `
);

export const Copy = styled(Button)(
  ({ theme }) => css`
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    width: auto;
    padding: 0.5rem 1.5rem;
    border: 0.1rem solid ${theme.colors.grays[500]};
    border-radius: ${theme.corners[0]};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary.normal};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.regular};

    &:hover,
    &:focus {
      border-color: ${theme.colors.primary.normal};
      background-color: ${theme.colors.primary.normal};
      color: ${theme.colors.white};
    }
  `
);

export const Line = styled.div<{ highlighted?: boolean } & Record<any, any>>(
  ({ theme, highlighted = false }) => css`
    background-color: ${highlighted ? `${theme.colors.tertiary.normal}40` : `transparent`};
    padding: 0 1rem;
    border-left: 0.5rem solid ${highlighted ? theme.colors.tertiary.normal : `transparent`};
  `
);

export const LineNumber = styled.span(
  ({ theme }) => css`
    display: inline-block;
    width: 2.4rem;
    margin-right: 2rem;
    border-right: 0.1rem solid ${theme.colors.secondary.normal};
    color: ${theme.colors.secondary.normal};
    line-height: 1.5;
    opacity: 0.6;
    user-select: none;
  `
);
