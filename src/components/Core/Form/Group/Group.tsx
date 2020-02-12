import React, { Children, cloneElement } from "react";
import {
  unstable_FormStateReturn as FormState,
  unstable_FormRadioGroup as BaseRadioGroup,
  unstable_FormGroup as BaseFormGroup
} from "reakit/Form";
import { FieldSet } from "./elements";

interface BaseGroupProps extends FormState<Record<any, any>> {
  as: React.ComponentType<any>;
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

const BaseGroup: React.FC<BaseGroupProps> = ({ as, className, style, children, ...props }) => (
  <FieldSet
    as={
      props?.name
        ? as // eslint-disable-next-line no-undefined
        : undefined
    }
    className={className}
    style={style}
    {...(props?.name ? props : {})}
  >
    {children && (children as React.ReactElement[]).length
      ? (children as React.ReactElement[])
          .filter(child => child)
          .map((child, i) => cloneElement(Children.only(child), { ...props, group: true, key: i }))
      : !Array.isArray(children) &&
        cloneElement(Children.only(children as React.ReactElement), { ...props, group: true })}
  </FieldSet>
);

export const Group: React.FC<BaseGroupProps> = props => <BaseGroup as={BaseFormGroup} {...props} />;

export const RadioGroup: React.FC<BaseGroupProps> = props => <BaseGroup as={BaseRadioGroup} {...props} />;
