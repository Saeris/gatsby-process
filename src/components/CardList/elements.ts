import styled, { css } from "styled-components";

export const CardList = styled.ul(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2rem;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0;
    margin: 0;
    list-style: none;
  `
);
