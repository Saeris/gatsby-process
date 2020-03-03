import styled, { css } from "styled-components";

export const Main = styled.main(
  () => css`
    display: flex;
    flex-direction: column;
    width: calc(100vw - (100vw - 100%));
  `
);

export const PageContent = styled.article(
  () => css`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    min-height: calc(100vh - 10.44rem - 3rem - 10.6rem);
    margin-top: 10.4rem;
    margin-bottom: 3rem;
  `
);
