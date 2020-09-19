import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React, { ReactElement } from 'react';
import { MenuItem } from './__item/menu__item';
import { MenuLink } from './__link/menu__link';
import './menu.css';
import { getClassName } from './utils';
import { MenuSelection } from './__selection/menu__selection';

type MenuItemProps = React.ComponentProps<typeof MenuItem>;

export interface IMenuProps extends IClassNameProps {
  children: Array<ReactElement<MenuItemProps, typeof MenuItem>>;
  animation?: boolean;
}

export const Menu: React.FC<IMenuProps> = React.memo(({ children, animation, className }) => {
  return (
    <div className={classnames(getClassName(), className)}>
      <ul className={getClassName('inner')}>
        {children.map((child) =>
          React.cloneElement<MenuItemProps>(child, undefined, <MenuLink href={child.props.href}>{child.props.children}</MenuLink>),
        )}
      </ul>
      {animation && <MenuSelection />}
    </div>
  );
});

export { MenuItem } from './__item/menu__item';
