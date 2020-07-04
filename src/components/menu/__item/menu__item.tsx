import { classnames } from '@bem-react/classnames';
import { compose, IClassNameProps } from '@bem-react/core';
import React from 'react';
import './menu__item.css';
import { getClassName } from '../utils';
import { withMenuItemHighlighted } from './_highlighted/menu__item_highlighted';

const MenuItemBase: React.FC<IClassNameProps> = ({ className, children }) => (
  <li className={classnames(getClassName('item'), className)}>{children}</li>
);

export const MenuItem = compose(withMenuItemHighlighted)(MenuItemBase);
