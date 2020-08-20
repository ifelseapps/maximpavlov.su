import { classnames } from '@bem-react/classnames';
import { compose, composeU, IClassNameProps } from '@bem-react/core';
import { Link } from 'gatsby';
import React from 'react';
import './menu__link.css';
import { cn } from '../../../classname';
import { getClassName } from '../utils';
import { withMenuItemHighlighted } from '../__item/_highlighted/menu__item_highlighted';

export interface IMenuLinkProps extends IClassNameProps {
  href: string;
}

export const cnLink = getClassName('link');

export const MenuLink: React.FC<IMenuLinkProps> = ({ className, children, href }) => (
  <Link className={classnames(cnLink, className)} to={href}>
    {children}
  </Link>
);
