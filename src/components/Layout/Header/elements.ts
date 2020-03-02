import styled, { css } from "styled-components";
import { Link } from "../../Core";
import { tracking } from "../../../utils";

export const Container = styled.header(
  ({ theme }) => css`
    z-index: 8000;
    position: fixed;
    top: 0;
    display: flex;
    width: 100vw;
    padding: 0;
    background-color: ${theme.colors.grays[100]};
  `
);

export const Navigation = styled.nav(
  () => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2.4rem 3.6rem;
  `
);

export const SiteInfo = styled.div(
  () => css`
    display: flex;
    flex: 0 0 auto;
  `
);

export const Title = styled.h1(
  ({ theme }) => css`
    padding: 0;
    margin: 0;
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.form};
    letter-spacing: ${tracking(50)};
    text-transform: uppercase;
  `
);

export const Headline = styled.h2(
  ({ theme }) => css`
    margin: 0;
    color: ${theme.colors.grays[800]};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.light};
  `
);

export const Links = styled.ul(
  () => css`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  `
);

export const NavItem = styled.li(
  () => css`
    padding: 0 0.6rem;
  `
);

export const NavLink = styled(Link)(
  ({ theme }) => css`
    border: none;
    color: ${theme.colors.black};
    text-decoration: none;

    &:focus {
      outline: none;
    }

    &.active {
      color: ${theme.colors.secondary.dark};
    }

    h1,
    h2 {
      transition: color 0.3s ease-in-out;
    }

    &:hover,
    &:focus {
      h1,
      h2 {
        color: ${theme.colors.secondary.normal};
      }

      &.active {
        color: ${theme.colors.secondary.normal};
      }
    }
  `
);
