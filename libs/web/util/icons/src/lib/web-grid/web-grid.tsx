import { SVGProps } from 'react';

import styles from './web-grid.module.css';

/* eslint-disable-next-line */
export interface WebGridProps {}

export function WebGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="auto"
        d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-7 18H4v-7h10Zm0-9H4V4h10Zm6 9h-4V4h4Z"
      />
    </svg>
  );
}

export default WebGrid;
