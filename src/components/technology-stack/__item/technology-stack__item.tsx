import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';
import { getClassName } from '../utils';
import { IStyles } from '../technologies';
import './technology-stack__item.css';

export interface ITechnologyStackItemProps extends IClassNameProps {
  styles: IStyles;
}

export const TechnologyStackItem: React.FC<ITechnologyStackItemProps> = ({ styles, className, children }) => (
  <li className={classnames(getClassName('item'), className)}>
    <span className={getClassName('item-label')}>{children}</span>
    <span className={getClassName('item-progress')} style={styles} />
  </li>
);
