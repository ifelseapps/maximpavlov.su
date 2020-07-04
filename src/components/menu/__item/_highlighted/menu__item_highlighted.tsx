import { withBemMod } from '@bem-react/core';
import React from 'react';
import './menu__item_highlighted.css';
import { getClassName } from '../../utils';

export interface IMenuItemHighlightedProps {
  highlighted?: boolean;
}

export const withMenuItemHighlighted = withBemMod<IMenuItemHighlightedProps>(getClassName('link'), {
  highlighted: true,
});
