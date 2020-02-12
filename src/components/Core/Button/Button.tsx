import React from "react";
import { Link, LinkProps } from "../Link";
import { Base, ButtonIcon } from "./elements";

export interface ButtonProps extends LinkProps, React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  Icon?: React.ReactType;
  danger?: boolean;
  secondary?: boolean;
  onClick?: React.MouseEventHandler;
}

export const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ Icon, children, ...props }, ref) => (
    <Base
      ref={ref}
      {...(props.to || props.href
        ? {
            forwardedAs: ((props.to ? Link : `a`) as unknown) as undefined,
            ...props
          }
        : props)}
    >
      {Icon && (
        <ButtonIcon>
          <Icon />
        </ButtonIcon>
      )}
      {children}
    </Base>
  )
);

Button.displayName = `Button`;
