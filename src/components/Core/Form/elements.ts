// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import {
  unstable_Form as BaseForm,
  unstable_FormInput as BaseInput,
  unstable_FormCheckbox as BaseCheckbox,
  unstable_FormRadio as BaseRadio,
  unstable_FormLabel as BaseLabel,
  unstable_FormMessage as BaseMessage,
  unstable_FormRemoveButton as BaseRemove,
  unstable_FormPushButton as BasePush,
  unstable_FormSubmitButton as BaseSubmit
} from "reakit/Form";
import { Button } from "../Button";
import { Action, IsActive, isActive, isValid } from "./Action";

export const Container = styled(BaseForm)(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80ch;
    max-width: 100%;
  `
);

export const inputStyles = ({ valid = false, theme }: { valid?: boolean; theme: DefaultTheme }) => css`
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 40ch;
  padding: calc((${theme.fontSizes.form} * 0.75) / 2) 1.5ch;
  margin-bottom: ${theme.fontSizes.form};
  border: 0.1rem solid ${theme.colors.grays[500]};
  border-bottom-color: ${valid ? theme.colors.grays[500] : theme.colors.secondary.normal};
  background-color: transparent;
  box-sizing: border-box;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.form};
  transition: 0.3s ease border-color;
  outline: none;

  &:disabled {
    background-color: ${theme.colors.grays[100]};
    color: ${theme.colors.grays[500]};
  }

  &:invalid {
    border-bottom-color: ${theme.colors.secondary.normal};
    color: ${theme.colors.secondary.normal};

    &::placeholder {
      color: ${theme.colors.secondary.normal};
      opacity: 50%;
    }

    &:hover,
    &:focus {
      border-color: ${theme.colors.grays[700]};
      border-bottom-color: ${theme.colors.secondary.normal};
    }
  }

  &::placeholder {
    color: ${valid ? theme.colors.grays[500] : theme.colors.secondary.normal};
    font-style: italic;
  }

  &:hover:not(:disabled):not(:invalid),
  &:focus:not(:disabled):not(:invalid) {
    border-color: ${theme.colors.grays[700]};
    color: ${theme.colors.black};
  }
`;

export const Input = styled(BaseInput)(inputStyles);

export const InputShadow = styled.textarea.attrs({
  "aria-hidden": true,
  readOnly: true
})(
  () => css`
    ${inputStyles}
    visibility: hidden;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    widht: 0;
    height: 0;
    transform: translateZ(0);
  `
);

interface ToggleStyles {
  active?: boolean;
  disabled?: boolean;
  valid?: boolean;
  theme: DefaultTheme;
}

const toggleStyles = ({ active = false, disabled = false, valid = false, theme }: ToggleStyles) => css`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  width: 1ch;
  height: 1ch;
  border: 0.1rem solid ${valid ? theme.colors.grays[500] : theme.colors.secondary.normal};
  border-color: ${active && theme.colors.primary.normal};
  background-color: ${active ? theme.colors.primary.normal : `transparent`};
  color: ${valid ? theme.colors.black : theme.colors.secondary.normal};
  box-sizing: border-box;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.form};

  ${disabled &&
    css`
      border-color: ${theme.colors.grays[300]};
      background-color: ${active ? theme.colors.grays[300] : theme.colors.grays[100]};
      color: ${theme.colors.grays[300]};
    `}

  &:hover,
  &:focus {
    ${!disabled &&
      css`
        border-color: ${theme.colors.primary.light};
        background-color: ${active ? theme.colors.primary.light : theme.colors.grays[100]};
      `}
  }

  &:nth-last-child(1) {
    margin-right: 0.5ch;
  }
`;

export const Checkbox = styled(Action).attrs({
  forwardedAs: BaseCheckbox
})<ToggleStyles & IsActive>(
  ({ name, value, values, errors, disabled, theme }) => css`
    ${toggleStyles({ active: isActive({ name, values, value }), disabled, valid: isValid({ name, errors }), theme })}
    border-radius: 0.25ch;
  `
);

export const Radio = styled(Action).attrs({
  forwardedAs: BaseRadio
})<ToggleStyles & IsActive>(
  ({ name, value, values, errors, disabled, theme }) => css`
    ${toggleStyles({ active: isActive({ name, values, value }), disabled, valid: isValid({ name, errors }), theme })}
    border-radius: 1ch;
  `
);

export const Toggle = styled(Action).attrs({ forwardedAs: BaseCheckbox })(() => css``);

export const Label = styled(BaseLabel)(() => css``);

export const Message = styled(BaseMessage)(() => css``);

export const Remove = styled(Button).attrs({
  forwardedAs: BaseRemove
})(() => css``);

export const Push = styled(Button).attrs({
  forwardedAs: BasePush
})(() => css``);

export const Submit = styled(Button).attrs({
  forwardedAs: BaseSubmit
})(() => css``);
