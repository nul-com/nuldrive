import { SVGProps } from "react"

import styles from './check-circle.module.css';

/* eslint-disable-next-line */
export interface CheckCircleProps {}

export function CheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="auto"
        d="m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l5-5a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
      />
    </svg>
  );
}

export default CheckCircle;
