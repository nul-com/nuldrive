import { SVGProps } from 'react';

import styles from './lock-open.module.css';

/* eslint-disable-next-line */
export interface LockOpenProps {}

export function LockOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="auto"
        d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13Zm5-4H9V7a3 3 0 0 1 5.12-2.13 3.08 3.08 0 0 1 .78 1.38 1 1 0 1 0 1.94-.5 5.09 5.09 0 0 0-1.31-2.29A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Zm1 10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
}

export default LockOpen;
