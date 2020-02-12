import styled, { css } from "styled-components";
import { Group } from "reakit/Group";

export const FieldSet = styled(Group)(
  ({ theme }) => css`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: calc(${theme.fontSizes.form} * 0.75);
    padding: 0;
    border: 0;
    box-sizing: border-box;

    &:last-child {
      margin-bottom: 0;
    }

    &:focus {
      outline: none;
    }
  `
);
