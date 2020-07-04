import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import './logo__name.css';
import { cnLogo } from '../logo';

export const LogoName: React.FC<IClassNameProps> = ({ className, children }) => (
  <span className={classnames(cnLogo('name'), className)}>{children}</span>
);
