import { SVGProps } from "react"

import styles from './terminal.module.css';

/* eslint-disable-next-line */
export interface TerminalProps {}

export function Terminal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="svg-icon"
      style={{
        verticalAlign: 'middle',
        overflow: 'hidden',
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M170.667 170.667h682.666A85.333 85.333 0 0 1 938.667 256v512a85.333 85.333 0 0 1-85.334 85.333H170.667A85.333 85.333 0 0 1 85.333 768V256a85.333 85.333 0 0 1 85.334-85.333zm0 85.333v512h682.666V256H170.667zM512 597.333h256v85.334H512v-85.334zm-43.307-103.637-150.826 150.87-60.331-60.374 90.453-90.453-90.453-90.539 60.33-60.33 150.827 150.826z"
        fill="auto"
      />
    </svg>
  );
}

export default Terminal;
