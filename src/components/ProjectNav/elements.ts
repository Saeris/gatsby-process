// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { Link } from "../Core";

export const Container = styled.div(
  () => css`
    display: grid;
    grid-template-columns: [prev-start] 1fr [prev-end next-start] 1fr [next-end];
    grid-column-gap: 10ch;
    width: 100%;
    padding: 0 2rem;
    margin-top: 3rem;
  `
);

const projectLink = ({ theme }: { theme: DefaultTheme }) => css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-bottom: none;
  color: ${theme.colors.secondary.normal};
  font-size: ${theme.fontSizes.headline};
  font-weight: ${theme.weights.medium};
`;

export const NavLabel = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.grays[500]};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.weights.light};
    font-style: italic;
  `
);

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
  `
);
