import React, { useRef, useEffect, useContext } from 'react';
import { CssTransition } from '@nuldrive/web-layouts-landing-sections-hero';

import styles from './transition.module.css';

/* eslint-disable-next-line */
export interface TransitionProps {
  show?: any;
  appear?: any;
  className?: any;
}

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

export function Transition(props: any) {
  const { show, appear, ...rest } = props;

  const { parent } = useContext<any>(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CssTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }
  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CssTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
