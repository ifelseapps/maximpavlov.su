import { classnames } from '@bem-react/classnames';
import { compose, IClassNameProps } from '@bem-react/core';
import React from 'react';
import './menu__item.css';
import { getClassName } from '../utils';
import { withMenuItemHighlighted } from './_highlighted/menu__item_highlighted';
import { withMenuItemPushed } from './_pushed/menu__item_pushed';
import { withMenuItemSelected } from './_selected/menu__item_selected';

export interface IMenuItemBaseProps extends IClassNameProps {
  href: string;
}

const MenuItemBase: React.FC<IMenuItemBaseProps> = ({ className, children }) => (
  <li className={classnames(getClassName('item'), className)}>{children}</li>
);

export const MenuItem = compose(withMenuItemHighlighted, withMenuItemPushed, withMenuItemSelected)(MenuItemBase);
