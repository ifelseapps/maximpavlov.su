import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import { cn } from '../../classname';
import { useConfig } from '../../context/config';
import { Logo } from '../logo';
import './header.css';
import { Menu, MenuItem } from '../menu';
import { HeaderMenu } from './__menu/header__menu';

export const cnHeader = cn('header');

export const Header: React.FC<IClassNameProps> = ({ className }) => {
  const config = useConfig();
  return (
    <header className={classnames(cnHeader(), className)}>
      <Logo name={config.layout.title} position={config.layout.description} className={cnHeader('logo')} />
      <HeaderMenu>
        <Menu>
          {config.layout.menu.map((item) => (
            <MenuItem key={item.path} href={item.path} highlighted={item.highlighted}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </HeaderMenu>
    </header>
  );
};
