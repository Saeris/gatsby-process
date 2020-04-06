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
  // Google Analytics Props
  target: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  eventValue: number;
}

const isExternal = /^(?:[a-z]+:)?\/\//i;

// eslint-disable-next-line
const email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const phone = /^\+\d{11,15}$/;

const getProtocol = (link: string): string => {
  switch (true) {
    case email.test(link):
      return `mailto:${link}`;
    case phone.test(link):
      return `tel:${link}`;
    default:
      return link;
  }
};

export const Link: React.FC<LinkProps> = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      // eslint-disable-next-line no-undefined
      to = undefined,
      // eslint-disable-next-line no-undefined
      href = undefined,
      external = (to || href) && isExternal.test((to || href) as string),
      onClick,
      children,
      target,
      eventCategory,
      eventAction,
      eventLabel,
      eventValue,
      ...props
    },
    ref
  ) =>
    external ? (
      <a
        ref={ref}
        href={getProtocol((to || href) as string)}
        {...props}
        onClick={e => {
          if (typeof onClick === `function`) {
            onClick(e);
          }
          if (window.ga) {
            window.ga(`send`, `event`, {
              eventCategory: eventCategory || `Outbound Link`,
              eventAction: eventAction || `click`,
              eventLabel: eventLabel || to || href,
              eventValue,
              transport: ``
            });
          }
          return false;
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
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
