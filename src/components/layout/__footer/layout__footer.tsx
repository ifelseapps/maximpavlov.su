import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import { cnLayout } from '../layout';
import './layout__footer.css';

export const LayoutFooter: React.FC<IClassNameProps> = ({ className, children }) => (
  <footer className={classnames(cnLayout('footer'), className)}>
    <div>{children}</div>
  </footer>
);
