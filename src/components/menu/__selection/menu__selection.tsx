import React from 'react';
import { getClassName } from '../utils';
import './menu__selection.css';

export const MenuSelection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current?.parentElement) {
      return;
    }
    const firstItem = ref.current.parentElement.querySelector('.menu__item');
    if (!firstItem) {
      return;
    }

    const firstItemPosition = firstItem.getBoundingClientRect();
    ref.current.style.width = `${Math.ceil(firstItemPosition.width)}px`;

    ref.current.parentElement.addEventListener('mouseover', onMouseOverHandler);
    ref.current.parentElement.addEventListener('mouseleave', onMouseLeaveHandler);

    function onMouseOverHandler(e: Event) {
      const target = e.target as HTMLElement;
      if (!target.closest('li')) {
        return;
      }
      const itemPosition = target.getBoundingClientRect();
      const width = Math.floor(itemPosition.width);
      const left = Math.floor(itemPosition.left - firstItemPosition.left);
      if (ref.current) {
        ref.current.style.transition = 'transform 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        ref.current.style.width = `${width}px`;
        ref.current.style.transform = `translate(${left}px, -50%)`;
      }
    }

    function onMouseLeaveHandler() {
      if (ref.current) {
        ref.current.style.transition = 'none';
        ref.current.style.transform = 'translate(-100%, -50%)';
      }
    }

    return () => {
      if (!ref.current?.parentElement) {
        return;
      }
      ref.current.parentElement.removeEventListener('mouseover', onMouseOverHandler);
      ref.current.parentElement.removeEventListener('mouseleave', onMouseLeaveHandler);
    };
  }, []);

  return <div ref={ref} className={getClassName('selection')} />;
};
