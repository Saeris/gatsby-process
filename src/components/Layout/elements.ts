import styled, { css } from "styled-components";

export const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #040404;
    color: #fff;
  `
);

export const PageContent = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 104px;
  `
);
