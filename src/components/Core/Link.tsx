import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { LinkProps as ReachLinkProps } from "@reach/router";

export interface LinkProps {
  // eslint-disable-next-line quotes
  to?: ReachLinkProps<{}>["to"];
  // eslint-disable-next-line quotes
  href?: ReachLinkProps<{}>["to"];
  external?: boolean;
  onClick?: React.MouseEventHandler;
}

const RegEx = /^(?:[a-z]+:)?\/\//i;

export const Link: React.FC<LinkProps> = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      // eslint-disable-next-line no-undefined
      to = undefined,
      // eslint-disable-next-line no-undefined
      href = undefined,
      external = (to || href) && RegEx.test((to || href) as string),
      onClick,
      children,
      ...props
    },
    ref
  ) =>
    external ? (
      <a ref={ref} href={to || href} {...props} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <GatsbyLink
        innerRef={ref as Function | undefined}
        to={(to || href) as string}
        activeClassName="active"
        {...props}
      >
        {children}
      </GatsbyLink>
    )
);

Link.displayName = `Link`;
