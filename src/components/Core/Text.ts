import styled, { css } from "styled-components";
import { content } from "./Container";

export const Paragraph = styled.p(
  ({ theme }) => css`
    ${content};
    line-height: 150%;
    margin-block-start: calc(0.75em / 2);
    margin-block-end: calc(0.75em / 2);
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `
);

export const Emphasis = styled.em(({ theme }) => css``);

export const Strong = styled.strong(
  ({ theme }) => css`
    font-weight: ${theme.weights.bold};
  `
);

export const Strikethrough = styled.del(({ theme }) => css``);

export const InlineCode = styled.code(
  ({ theme }) => css`
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    background-color: ${theme.colors.grays[200]};
    color: ${theme.colors.secondary.normal};
    font-family: "Fira Code", monospace;
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.weights.light};
  `
);
