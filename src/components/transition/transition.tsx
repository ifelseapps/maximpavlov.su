import React, { CSSProperties } from 'react';
import { Transition as ReactTransition, TransitionGroup } from 'react-transition-group';
import { Content } from '../content';

const timeout = 500;

const timeouts = {
  enter: timeout,
  exit: timeout,
};

const transitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

const renderFactory = (children: React.ReactNode) => (status: keyof typeof transitionStyles) => (
  <div style={{ ...(transitionStyles[status] as CSSProperties) }}>
    <Content>{children}</Content>
  </div>
);

interface ITransitionProps {
  path: string;
}

export const Transition: React.FC<ITransitionProps> = ({ path, children }) => {
  const render = React.useCallback(renderFactory(children), [children]);
  return (
    <TransitionGroup>
      <ReactTransition key={path} timeout={timeouts}>
        {render}
      </ReactTransition>
    </TransitionGroup>
  );
};
