import styled, { css } from "styled-components";
import { animated } from "react-spring";

export const Area = styled(animated.div)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50vw;

    @media (max-width: ${theme.breakpoints[2]}) {
      grid-template-columns: 1fr;
      grid-auto-rows: 60vw;
    }
  `
);
