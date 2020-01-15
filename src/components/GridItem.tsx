import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const GridItem = styled(Link)(
  ({ theme }) => css`
    position: relative;

    > div {
      position: absolute !important;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    > div img {
      transition: all 0.3s ease 0s !important;
    }

    > span {
      z-index: 10;
      position: absolute;
      right: 0;
      left: 0;
      padding: ${theme.space[6]};
      color: white;
      font-size: ${theme.fontSizes[4]};
      font-weight: 700;
      text-align: right;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

      @media (max-width: ${theme.breakpoints[3]}) {
        padding: ${theme.space[5]};
        font-size: ${theme.fontSizes[3]};
      }
    }

    &:hover {
      > div img {
        transform: scale(1.1);
      }
    }
  `
)
