import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React, { ReactElement } from 'react';
import { MenuItem } from './__item/menu__item';
import { MenuLink } from './__link/menu__link';
import './menu.css';
import { getClassName } from './utils';

type MenuItemProps = React.ComponentProps<typeof MenuItem>;

export interface IMenuProps extends IClassNameProps {
  children: Array<ReactElement<MenuItemProps, typeof MenuItem>>;
}

export const Menu: React.FC<IMenuProps> = ({ children, className }) => {
  return (
    <ul className={classnames(getClassName(), className)}>
      {children.map((child) =>
        React.cloneElement<MenuItemProps>(child, undefined, <MenuLink href={child.props.href}>{child.props.children}</MenuLink>),
      )}
    </ul>
  );
};

export { MenuItem } from './__item/menu__item';
