import { SVGProps } from 'react';

import styles from './sort.module.css';

/* eslint-disable-next-line */
export interface SortProps {}

export function Sort(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="auto"
        d="M16.29 14.29 12 18.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0-1.42-1.42ZM7.71 9.71 12 5.41l4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-5-5a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42Z"
      />
    </svg>
  );
}

export default Sort;
