import styled, { css } from "styled-components";
import { Link } from "../../Link";

export const Container = styled.header(
  ({ theme }) => css`
    z-index: 8000;
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    padding: 0;
    background-color: #fff;
  `
);

export const Navigation = styled.nav(
  ({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 36px;
    box-sizing: border-box;
  `
);

export const SiteInfo = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 0 0 auto;
  `
);

export const Title = styled.h1(
  ({ theme }) => css`
    padding: 0;
    margin: 0;
    color: #2e2e2e;
    font-family: "Montserrat";
    font-size: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;
  `
);

export const Headline = styled.h2(
  ({ theme }) => css`
    margin: 0;
    color: #999;
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 400;
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
    padding: 0 6px;
  `
);

export const NavLink = styled(Link)(
  ({ theme }) => css`
    text-decoration: none;
  `
);
