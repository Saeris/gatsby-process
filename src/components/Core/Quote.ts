// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { content } from "./Container";

const quotationMark = (theme: DefaultTheme) => css`
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 1ch;
  color: ${theme.colors.grays[600]};
  opacity: 0.15;
  font-size: 21rem;
  line-height: 1em;
  user-select: none;

`

export const Blockquote = styled.blockquote(
  ({ theme }) => css`
    ${content};
    position: relative;
    max-width: 40ch;
    padding-left: 3rem;
    margin: 4.5rem 0;
    border-left: 5px solid ${theme.colors.secondary.normal};
    font-size: ${theme.fontSizes.form};
    font-style: italic;
    line-height: 1.5;

    &:before {
      ${quotationMark(theme)};
      content: "“";
      justify-content: flex-start;
      top: -2.1rem;
      left: 0;
    }

    &:after {
      ${quotationMark(theme)};
      content: "”";
      justify-content: flex-end;
      bottom: -2.2rem;
      right: 0;
    }

    cite {
      display: block;
      color: ${theme.colors.grays[800]};
      font-size: ${theme.fontSizes.tiny};
      font-style: normal;
      text-transform: uppercase;
    }
  `
);
