import styled, { css } from "styled-components";

export const Main = styled.main(
  () => css`
    display: grid;
    grid-template-rows:
      [header-start]
      min-content
      [header-end content-start]
      1fr
      [content-end footer-start]
      min-content
      [footer-end];
    grid-row-gap: 3rem;
    width: 100%;
    min-height: 100vh;
  `
);

export const PageContent = styled.article(
  () => css`
    grid-row: content;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10.4rem;
  `
);
