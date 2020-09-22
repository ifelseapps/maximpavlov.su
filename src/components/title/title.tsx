import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import './title.css';
import { classnames } from '@bem-react/classnames';
import { cn } from '../../classname';

interface ITitleProps extends IClassNameProps {
  level: 1 | 2 | 3;
  visuallyHidden?: boolean;
  as?: React.ElementType;
}

const getClassName = cn('title');

export const Title: React.FC<ITitleProps> = ({ level, visuallyHidden, className, children, as }) => {
  const Element = as ? as : `h${level}` as React.ElementType;
  return <Element className={classnames(getClassName(), getClassName({ level, hidden: visuallyHidden }), className)}>{children}</Element>;
};
