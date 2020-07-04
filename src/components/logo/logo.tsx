import { classnames } from '@bem-react/classnames';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import { cn } from '../../classname';
import './logo.css';
import { LogoName } from './__name';
import { LogoPosition } from './__position';

export const cnLogo = cn('logo');

export interface ILogoProps extends IClassNameProps {
  name: string;
  position: string;
}
export const Logo: React.FC<ILogoProps> = ({ name, position, className }) => (
  <div className={classnames(cnLogo(), className)}>
    <LogoName>{name}</LogoName>
    <LogoPosition>{position}</LogoPosition>
  </div>
);
