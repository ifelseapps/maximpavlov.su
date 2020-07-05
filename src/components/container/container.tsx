import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import './container.css';
import { cn } from '../../classname';

const cnContainer = cn('container');

export interface IContainerProps extends IClassNameProps {
  as?: React.ElementType;
}

export const Container: React.FC<IContainerProps> = ({ children, className, as: Element = 'div' }) => (
  <Element className={classnames(cnContainer(), className)}>{children}</Element>
);
