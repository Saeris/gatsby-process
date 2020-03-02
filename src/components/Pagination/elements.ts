import styled, { css } from "styled-components";
import { Button as BaseButton } from "reakit/Button";
import { withoutProps } from "../../utils";

export const Navigation = styled.nav.attrs({
  role: `navigation`,
  "aria-label": `Pagination Navigation`
})(() => css``);

export const Controls = styled.ul(
  () => css`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  `
);

export const Control = styled.li(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export const Button = styled(withoutProps(`active`)(BaseButton))<{
  active: boolean;
}>(
  ({ active, theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 3.2rem;
    padding: 0;
    margin: 0 0.4rem;
    border: none;
    background: ${active ? theme.colors.primary.normal : theme.colors.grays[200]};
    border-radius: ${theme.corners[0]};
    color: ${active ? theme.colors.white : theme.colors.grays[800]};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.bold};
    cursor: pointer;

    &:disabled {
      color: ${active ? theme.colors.white : theme.colors.grays[500]};
      cursor: default;
    }

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      color: ${active ? theme.colors.white : theme.colors.black};
      background: ${active ? theme.colors.primary.light : theme.colors.grays[300]};
    }

    &:focus {
      outline: none;
    }
  `
);
