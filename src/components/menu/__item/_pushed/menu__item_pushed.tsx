import { withBemMod } from '@bem-react/core';
import React from 'react';
import './menu__item_pushed.css';
import { getClassName } from '../../utils';

interface IMenuItemPushedProps {
  pushed?: boolean;
}

export const withMenuItemPushed = withBemMod<IMenuItemPushedProps>(getClassName('item'), { pushed: true });
