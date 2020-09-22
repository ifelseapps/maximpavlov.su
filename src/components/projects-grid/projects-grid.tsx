import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';
import { getClassName } from './utils';
import './projects-grid.css';

export const ProjectsGrid: React.FC<IClassNameProps> = ({ children, className }) => {
  return <ul className={classnames(getClassName(), className)}>{children}</ul>;
};
