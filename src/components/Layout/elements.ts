import styled, { css } from "styled-components";

export const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100vw;
  `
);

export const PageContent = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    min-height: calc(100vh - 16.4rem);
    margin-top: 10.4rem;
    margin-bottom: 3rem;
  `
);
