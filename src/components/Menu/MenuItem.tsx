import React, { cloneElement, Children } from "react";
import { MenuItemProps } from "reakit/Menu";
import { Link } from "../Link";
import { Item, MenuIcon } from "./elements";

interface MenuItemProps {
  icon?: React.ElementType;
  to?: string;
  onClick?: React.MouseEventHandler;
  danger?: boolean;
  disabled?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, to, children, ...props }) =>
  to ? (
    <Item {...props}>
      {(itemProps: MenuItemProps) =>
        cloneElement(
          Children.only(
            <Link to={to}>
              {Icon && (
                <MenuIcon>
                  <Icon />
                </MenuIcon>
              )}
              {children}
            </Link>
          ),
          itemProps
        )
      }
    </Item>
  ) : (
    <Item {...props}>
      {Icon && (
        <MenuIcon>
          <Icon />
        </MenuIcon>
      )}
      {children}
    </Item>
  );
