import styled, { css } from "styled-components";

export const CardList = styled.ul(
  () => css`
    grid-column: full;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2rem;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 128rem;
    padding: 2rem 0;
    margin: 0;
    list-style: none;
  `
);
