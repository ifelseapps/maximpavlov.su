import React from 'react';
import { technologies, stylesByLevel } from './technologies';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';
import { getClassName } from './utils';
import './technology-stack.css';
import { TechnologyStackItem } from './__item/technology-stack__item';

export const TechnologyStack: React.FC<IClassNameProps> = ({ className }) => {
  return (
    <ul className={classnames(getClassName(), className)}>
      {technologies.map((tech) => (
        <TechnologyStackItem key={tech.name} styles={stylesByLevel[tech.level]}>
          {tech.name}
        </TechnologyStackItem>
      ))}
    </ul>
  );
};
