import React from 'react';
import './menu__item_selected.css';
import { withBemMod } from '@bem-react/core';
import { getClassName } from '../../utils';

interface IMenuItemSelectedProps {
  selected?: boolean;
}

export const withMenuItemSelected = withBemMod<IMenuItemSelectedProps>(getClassName('item'), { selected: true });
