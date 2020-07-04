import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import './header__menu.css';
import { cnHeader } from '../header';

export const HeaderMenu: React.FC<IClassNameProps> = ({ className, children }) => <nav className={cnHeader('menu')}>{children}</nav>;
