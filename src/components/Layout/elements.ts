import styled, { css } from "styled-components";

export const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
);

export const PageContent = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80ch;
    max-width: calc(128rem + 9.2rem);
    min-height: calc(100vh - 16.4rem);
    padding: 0 4.8rem;
    margin-top: 10.4rem;
    margin-bottom: 3rem;
    box-sizing: border-box;
  `
);
