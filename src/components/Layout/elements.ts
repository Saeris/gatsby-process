import styled, { css } from "styled-components"
import { readableColor } from "polished"
import { Box, Flex } from "../elements"

export const Wrapper = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: ${theme.sidebarWidth.big} 1fr;

    @media (max-width: ${theme.breakpoints[4]}) {
      grid-template-columns: ${theme.sidebarWidth.normal} 1fr;
    }

    @media (max-width: ${theme.breakpoints[2]}) {
      grid-template-columns: 1fr;
    }
  `
)

export const SideBarInner = styled(Box)<{ bg: string }>(
  ({ theme, bg }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: ${theme.sidebarWidth.big};
    height: 100%;
    background: ${bg};

    @media (max-width: ${theme.breakpoints[4]}) {
      width: ${theme.sidebarWidth.normal};
    }

    @media (max-width: ${theme.breakpoints[2]}) {
      position: relative;
      width: 100%;
    }

    svg {
      fill: ${readableColor(`${bg}`)};
    }
  `
)

export const Nav = styled(Flex)<{ color: string }>(
  ({ theme, color }) => css`
    a {
      color: ${readableColor(`${color}`)};
      font-size: ${theme.fontSizes[3]};
      text-decoration: none;
      line-height: 1.5;

      &:hover,
      &:focus,
      &.navlink-active {
        color: ${theme.colors.primary};
      }

      @media (max-width: ${theme.breakpoints[2]}) {
        margin-left: ${theme.space[4]};
        font-size: ${theme.fontSizes[2]};
      }

      @media (max-width: ${theme.breakpoints[1]}) {
        margin-left: ${theme.space[3]};
        font-size: ${theme.fontSizes[1]};
      }

      @media (max-width: ${theme.breakpoints[0]}) {
        margin-left: ${theme.space[2]};
        font-size: ${theme.fontSizes[0]};
      }
    }
  `
)

export const Main = styled.main(
  ({ theme }) => css`
@media (min-width: calc(${theme.breakpoints[2]} + 1px)) {
  grid-column-start: 2;
}
`
)

export const Footer = styled.footer<{ color: string }>(
  ({ theme, color }) => css`
    position: fixed;
    bottom: 0;
    width: ${theme.sidebarWidth.big};
    background: ${color};
    color: ${readableColor(`${color}`, `${theme.colors.grey}`, "#c3c3c3")};

    a {
      color: ${readableColor(`${color}`)};
      text-decoration: none;
      &:hover {
        color: ${theme.colors.primary};
      }
    }

    @media (max-width: ${theme.breakpoints[4]}) {
      width: ${theme.sidebarWidth.normal};
    }

    @media (max-width: ${theme.breakpoints[2]}) {
      position: relative;
      width: 100%;
    }
  `
)
