import styled, { css } from "styled-components";
import { content } from "./Container";

export const Break = styled.hr(
  ({ theme }) => css`
    ${content};
    width: 95%;
    margin: 3rem auto;
    border: 0;
    border-bottom: 1px solid ${theme.colors.grays[500]};
  `
);
