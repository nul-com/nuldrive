import { Logo } from '@nuldrive/web/util/icons';

import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  return (
    <div className="flex items-center justify-between px-3 h-header bg-blue-300 w-screen">
      <div className="w-9">
        <Logo />
      </div>
      <div className="">Hello world</div>
    </div>
  );
}

export default WebLayoutsBaseHeader;
