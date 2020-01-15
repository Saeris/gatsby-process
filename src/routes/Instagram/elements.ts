import styled, { css } from "styled-components"
import { animated } from "react-spring"
import { Flex } from "../../components"

export const Grid = styled(animated.div)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

    @media (max-width: ${theme.breakpoints[4]}) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: ${theme.breakpoints[3]}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr;
    }
  `
)

export const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease 0s;
  opacity: 0;
`

export const Title = styled.div(
  ({ theme }) => css`
    color: white;
    font-size: ${theme.fontSizes[3]};
    font-weight: 700;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transform: translateY(-45px);
    transition: all 0.4s ease 0s;
    opacity: 0;

    @media (max-width: ${theme.breakpoints[3]}) {
      font-size: ${theme.fontSizes[1]};
    }
  `
)

export const Bottom = styled(Flex)(
  ({ theme }) => css`
    color: white;
    transform: translateY(45px);
    transition: all 0.4s ease 0s;
    opacity: 0;

    @media (max-width: ${theme.breakpoints[3]}) {
      font-size: ${theme.fontSizes[0]};
    }
  `
)

export const Item = styled(animated.a)`
  position: relative;
  overflow: hidden;

  > div img {
    transition: all 0.3s ease 0s !important;
  }

  &:hover {
    ${Overlay} {
      opacity: 1;
    }

    ${Bottom} {
      transform: translateY(0);
      opacity: 1;
    }

    ${Title} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const Content = styled(Flex)(
  ({ theme }) => css`
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: ${theme.space[5]};
  `
)

export const HeartIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`
