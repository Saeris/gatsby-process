import React, { useEffect, Children, cloneElement } from "react";
import { unstable_useFormState as useFormState, unstable_FormInitialState as initialFormState } from "reakit/Form";
import { Container } from "./elements";

type V = Record<any, any>;

export interface FormProps extends Omit<React.ComponentProps<typeof Container>, "baseId" | "submit"> {
  onChange?: (values: V) => void;
  onValidate?: initialFormState<V>["onValidate"];
  onSubmit?: initialFormState<V>["onSubmit"];
}

export const Form: React.FC<FormProps> = ({
  baseId,
  values = {},
  validateOnBlur,
  validateOnChange,
  resetOnSubmitSucceed,
  resetOnUnmount,
  onChange = () => {},
  onValidate,
  onSubmit,
  children,
  ...props
}) => {
  const form = useFormState({
    baseId,
    values,
    validateOnBlur,
    validateOnChange,
    resetOnSubmitSucceed,
    resetOnUnmount,
    onValidate,
    onSubmit
  });

  useEffect(() => {
    onChange(form.values);
  }, [onChange, form.values]);

  return (
    <Container {...form} {...props}>
      {children && (children as React.ReactElement[]).length
        ? (children as React.ReactElement[]).reduce((cloned: React.ReactElement[], child, i) => {
            if (child) {
              cloned.push(cloneElement(Children.only(child), { ...form, key: i }));
            }
            return cloned;
          }, [])
        : !Array.isArray(children) && cloneElement(Children.only(children as React.ReactElement), form)}
    </Container>
  );
};
