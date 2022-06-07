import { SVGProps } from "react"

import styles from './ellipsis-h.module.css';

/* eslint-disable-next-line */
export interface EllipsisHProps {}

export function EllipsisH(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="auto"
      d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm-7 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm14 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
    />
  </svg>
  );
}

export default EllipsisH;
