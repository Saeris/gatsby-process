// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { content } from "./Container";

const listStyles = ({ theme }: { theme: DefaultTheme }) => css`
  ${content};
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-left: 1ch;
  list-style: none;

  li {
    flex: 1 0 auto;
    justify-content: flex-start;

    &:before {
      display: inline-flex;
      flex: 1 0 auto;
      width: 1ch;
      margin-right: 0.5ch;
      color: ${theme.colors.secondary.normal};
      font-weight: bold;
    }
  }
`;

export const List = styled.ul(
  () => css`
    ${listStyles};

    li {
      &:before {
        content: "•";
      }
    }
  `
);

export const Ordered = styled.ol(
  ({ theme }) => css`
    ${listStyles};
    counter-reset: ordered-item;

    ol {
      margin-left: 3ch;
    }

    li {
      counter-increment: ordered-item;

      &:before {
        content: "." counters(ordered-item, ".");
        color: ${theme.colors.secondary.normal};
        font-family: ${theme.fonts.numbers};
        font-variant-numeric: tabular-nums;
        text-align: right;
        white-space: nowrap;
        direction: rtl;
      }
    }
  `
);

export const Item = styled.li(() => css``);
