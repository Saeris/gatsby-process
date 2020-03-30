import styled, { css } from "styled-components";
import { Button } from "reakit/Button";

export const HamburgerButton = styled(Button)(
  () => css`
    position: relative;
    z-index: 9500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.8rem;
    height: 6.8rem;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  `
);
