// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { Link, columnWidth } from "../../../Core";
import { Preview as BasePreview } from "../../../Preview";

export const Container = styled.div(
  () => css`
    grid-column: content;
    display: grid;
    grid-template-columns:
      [prev-start]
      repeat(3, ${columnWidth})
      [prev-end center-start]
      repeat(2, ${columnWidth})
      [center-end next-start]
      repeat(3, ${columnWidth})
      [next-end];
    grid-column-gap: 1ch;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
  `
);

export const Preview = styled(BasePreview)(
  () => css`
    align-content: center;
    width: 100%;
    min-width: unset;
  `
);

export const Title = styled.h3(
  ({ theme }) => css`
    z-index: 200;
    margin: 0;
    margin-bottom: 1rem;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.weights.medium};
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s;
  `
);

export const NavLabel = styled.span(
  ({ theme }) => css`
    width: 100%;
    max-width: 30rem;
    padding-top: 0.5rem;
    margin-top: 1rem;
    border-top: 1px solid ${theme.colors.grays[700]};
    color: ${theme.colors.grays[700]};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.light};
    font-style: italic;
    transition: all 0.5s;
  `
);

const projectLink = ({ theme }: { theme: DefaultTheme }) => css`
  display: flex;
  flex-direction: column;
  border-bottom: none;

  &:hover,
  &:focus {
    ${NavLabel} {
      border-color: ${theme.colors.secondary.normal};
      color: ${theme.colors.secondary.normal};
    }

    ${Preview} > div {
      &:before {
        opacity: 0.4;
      }

      h3,
      span {
        opacity: 1;
      }
    }
  }
`;

export const Prev = styled(Link)(
  () => css`
    ${projectLink}
    grid-column: prev;
    align-items: flex-start;
  `
);

export const Next = styled(Link)(
  () => css`
    ${projectLink}
    grid-column: next;
    align-items: flex-end;

    ${NavLabel} {
      text-align: right;
    }
  `
);
