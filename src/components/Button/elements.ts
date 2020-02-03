// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { Button } from "reakit/Button";
import { withoutProps } from "../../utils";

export type StyleProps = {
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
  theme: DefaultTheme;
};

const getBorderColor = ({ disabled = false, secondary = false, danger = false, theme }: StyleProps) => {
  switch (true) {
    case disabled:
      return theme.colors.grays[500];
    case danger:
      return theme.colors.secondary.normal;
    case secondary:
      return theme.colors.grays[800];
    default:
      return theme.colors.primary.normal;
  }
};

const getBackgroundHoverColor = ({ disabled = false, secondary = false, danger = false, theme }: StyleProps) => {
  switch (true) {
    case disabled:
      return `transparent`;
    case danger:
      return theme.colors.secondary.normal;
    case secondary:
      return theme.colors.grays[800];
    default:
      return theme.colors.primary.normal;
  }
};

const getHoverColor = ({ disabled = false, danger = false, secondary = false, theme }: StyleProps) => {
  switch (true) {
    case disabled:
      return theme.colors.grays[500];
    case danger:
      return theme.colors.white;
    case secondary:
      return theme.colors.white;
    default:
      return theme.colors.white;
  }
};

export const buttonStyles = ({ disabled = false, theme }: StyleProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 24ch;
  padding: calc((${theme.fontSizes.form} * 0.75) / 2) 1.5ch;
  border: none;
  border-radius: 0.5rem;
  border: 0.1rem solid ${getBorderColor};
  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden;
  color: ${getBorderColor};
  font-weight: ${theme.weights.regular};
  font-size: ${theme.fontSizes.form};
  font-style: italic;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: 0.3s ease all;
  user-select: none;
  outline: none;
  ${!disabled &&
    css`
      cursor: pointer;
    `};

  -webkit-appearance: inherit !important;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    background-color: ${getBackgroundHoverColor};
    color: ${getHoverColor};
  }
`;

export interface BaseProps {
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
  children?: React.ReactNode;
}

export const Base = styled(withoutProps(`secondary`, `danger`)(Button))<BaseProps>(buttonStyles);

export const ButtonIcon = styled.span(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    padding-right: 0.5rem;
    font-size: ${theme.fontSizes.form};
  `
);
