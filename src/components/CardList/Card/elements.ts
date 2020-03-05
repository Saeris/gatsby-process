import React from "react"
// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { Preview as BasePreview } from "../../Preview";
import { Link } from "../../Core";

export const Container = styled.li(
  () => css`
    position: relative;
    width: 100%;
    min-width: 30rem;
    height: 100%;
    max-height: 30rem;
    overflow: hidden;
  `
);

export const Preview = styled(BasePreview).attrs({
  forwardedAs: Link
})<React.ComponentProps<typeof Link>>(
  () => css`
    border: none;
  `
);

const cardText = ({ theme }: { theme: DefaultTheme }) => css`
  z-index: 200;
  color: ${theme.colors.white};
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s;
`;

export const Title = styled.h3(
  ({ theme }) => css`
    ${cardText};
    margin: 0;
    margin-bottom: 1rem;
    font-size: ${theme.fontSizes.body};
  `
);

export const Client = styled.span(
  ({ theme }) => css`
    ${cardText};
    font-size: ${theme.fontSizes.tiny};
  `
);
