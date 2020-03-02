import React from "react";
import styled, { css } from "styled-components";
import { unstable_FormLabel as BaseLabel } from "reakit/Form";

interface LabelProps extends React.ComponentProps<typeof BaseLabel> {
  name: string;
  active?: boolean;
  disabled?: boolean;
  valid?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

export const Label = styled(BaseLabel)<LabelProps>(
  ({ active = false, disabled = false, valid = false, theme }) => css`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: calc(${theme.fontSizes.form} * 0.75);
    color: ${valid ? theme.colors.black : theme.colors.secondary.normal};
    cursor: pointer;
    user-select: none;

    ${disabled &&
      css`
        border-color: ${theme.colors.grays[500]};
        color: ${theme.colors.grays[500]};
      `}

    &:hover, &:focus {
      ${!disabled &&
        css`
          color: ${theme.colors.black};

          span {
            border-color: ${active ? theme.colors.primary.light : theme.colors.black};
            background-color: ${active && theme.colors.primary.light};
          }
        `}
    }

    &:last-child {
      margin-bottom: 0;
    }
  `
);

interface InputProps {
  name: string;
  value: string | undefined;
}

export const Input = styled.input<InputProps>(
  () => css`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `
);

export const Span = styled.span<{ disabled?: boolean; valid?: boolean }>(() => css``);
