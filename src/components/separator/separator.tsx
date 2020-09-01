import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '../../classname';
import './separator.css';
import { classnames } from '@bem-react/classnames';

export const Separator: React.FC<IClassNameProps> = ({ className }) => <hr className={classnames(cn('separator')(), className)} />;
