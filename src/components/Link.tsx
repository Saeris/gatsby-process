import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { LocationDescriptor } from "history";

export interface ILinkProps {
  to?: LocationDescriptor;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Link: React.FC<React.ComponentProps<typeof GatsbyLink>> = React.forwardRef<HTMLAnchorElement, ILinkProps>(
  ({ to = undefined, external = false, onClick, children, ...props }, ref) =>
    external ? (
      <a ref={ref} {...props} href={to as string} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <GatsbyLink innerRef={ref} to={to} {...props}>
        {children}
      </GatsbyLink>
    )
);
