import { Logo } from '@nuldrive/web/util/icons';

import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  return (
    <div className="h-header bg-white w-screen">
      <Logo />
      <div className="">Hello world</div>
    </div>
  );
}

export default WebLayoutsBaseHeader;
