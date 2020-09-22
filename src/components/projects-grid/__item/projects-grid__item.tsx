import React, { CSSProperties } from 'react';
import { getClassName } from '../utils';
import './projects-grid__item.css';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';
import { ProjectsGridLink } from '../__link/projects-grid__link';

interface IProjectsGridItemProps extends IClassNameProps {
  columns: string;
  rows: string;
  color: string;
  link: string;
  inverted?: boolean;
}

export const ProjectsGridItem: React.FC<IProjectsGridItemProps> = ({ rows, columns, color, inverted, children, className, link }) => {
  const styles = React.useMemo<CSSProperties>(
    () => ({
      gridColumn: columns,
      gridRow: rows,
      '--color': color,
    }),
    [rows, columns, color, inverted],
  );

  return (
    <li className={classnames(getClassName('item'), className)} style={styles}>
      <ProjectsGridLink href={link}>{children}</ProjectsGridLink>
    </li>
  );
};
