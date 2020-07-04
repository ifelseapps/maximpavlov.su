import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import './menu.css';
import { IConfig } from '../../contracts/config';
import { MenuItem } from './__item/menu__item';
import { MenuLink } from './__link/menu__link';
import { getClassName } from './utils';

export interface IMenuProps extends IClassNameProps {
  items: Array<IConfig['layout']['menu'][number]>;
}

export const Menu: React.FC<IMenuProps> = ({ items, className }) => {
  return (
    <ul className={classnames(getClassName(), className)}>
      {items.map((item) => (
        <MenuItem highlighted={item.highlighted} key={item.path}>
          <MenuLink href={item.path}>{item.name}</MenuLink>
        </MenuItem>
      ))}
    </ul>
  );
};
