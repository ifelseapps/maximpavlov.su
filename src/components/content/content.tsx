import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';
import { getClassName } from './utils';
import './content.css';

interface IContentProps extends IClassNameProps {
  as?: React.ElementType;
}

export const Content: React.FC<IContentProps> = ({ as: Element = 'div', children, className }) => {
  return <Element className={classnames(getClassName(), className)}>{children}</Element>;
};
