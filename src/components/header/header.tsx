import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import { cn } from '../../classname';
import { useConfig } from '../../context/config';
import { Logo } from '../logo';
import './header.css';
import { Menu, MenuItem } from '../menu';
import { HeaderMenu } from './__menu/header__menu';
import { MenuConfig } from '../../contracts/config';

export const cnHeader = cn('header');

interface IHeaderProps extends IClassNameProps {
  renderMenu: (menu: MenuConfig) => React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ renderMenu, className }) => {
  const config = useConfig();

  return (
    <header className={classnames(cnHeader(), className)}>
      <Logo name={config.layout.title} position={config.layout.description} className={cnHeader('logo')} />
      <HeaderMenu>{renderMenu(config.layout.menu)}</HeaderMenu>
    </header>
  );
};
