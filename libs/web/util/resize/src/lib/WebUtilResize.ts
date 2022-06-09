import { useRef, useEffect, useState } from 'react';

export function webUtilResize(elRef: any, breakpoints: any): string {
  const firstQuery = Object.keys(breakpoints[0])[0];
  const [breakSize, setBreakSize] = useState(firstQuery);

  const observer = useRef(
    new ResizeObserver((entries) => {
      // Only care about the first element, we expect one element ot be watched
      const { width } = entries[0].contentRect;

      setBreakSize(findBreakPoint(breakpoints, width));
    })
  );

  useEffect(() => {
    if (elRef.current) {
      observer.current.observe(elRef.current);
    }

    return () => {
      observer.current.unobserve(elRef);
    };
  }, [elRef, observer]);

  return breakSize;
}

function findBreakPoint(breakpoints: any, width: any) {
  const breakpointIndex = breakpoints
    .map((x: any) => Object.values(x)[0])
    .findIndex((x: any) => width < x);

  // element is larger than every breakpoint so it must be the last breakpoint
  if (breakpointIndex === -1) {
    return Object.keys(breakpoints[breakpoints.length - 1])[0];
  }

  return Object.keys(breakpoints[breakpointIndex])[0];
}
