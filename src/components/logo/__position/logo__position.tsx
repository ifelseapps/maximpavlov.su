import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import { cnLogo } from '../logo';
import './logo__position.css';

export const LogoPosition: React.FC<IClassNameProps> = ({ children, className }) => (
  <span className={classnames(cnLogo('position'), className)}>{children}</span>
);
