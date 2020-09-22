import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';
import { getClassName } from '../utils';
import './projects-grid__link.css';

interface IProjectsGridLinkProps extends IClassNameProps {
  href: string;
}

export const ProjectsGridLink: React.FC<IProjectsGridLinkProps> = ({ className, children, href }) => (
  <a href={href} className={classnames(getClassName('link'), className)} target='_blank'>
    {children}
  </a>
);
