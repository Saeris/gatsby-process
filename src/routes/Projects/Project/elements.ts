import styled, { css } from "styled-components"
import { transparentize, readableColor } from "polished"
import { animated } from "react-spring"
import { Box, AnimatedBox, Button } from "../../../components"

export const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

export const Content = styled(Box)<{ bg: string }>(
  ({ theme, bg }) => css`
    background-color: ${transparentize(0.9, bg)};

    .gatsby-image-wrapper:not(:last-child) {
      margin-bottom: ${theme.space[10]};

      @media (max-width: ${theme.breakpoints[3]}) {
        margin-bottom: ${theme.space[8]};
      }
    }
  `
)

export const Category = styled(AnimatedBox)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes[1]};
    letter-spacing: 0.05em;
    text-transform: uppercase;
  `
)

export const Description = styled(animated.div)`
  max-width: 960px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
`

export const PButton = styled(Button)<{ color: string }>(
  ({ color }) => css`
    background: ${color === "white" ? "black" : color};
    color: ${readableColor(color === "white" ? "black" : color)};
  `
)
