import { WebLayoutsBaseNavigation } from '@nuldrive/web/layouts/base/navigation';

import styles from './WebLayoutsBasePanel1.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanel1Props {}

export function WebLayoutsBasePanel1(props: WebLayoutsBasePanel1Props) {
  return (
    <div className="hidden md:flex md:h-full">
      <WebLayoutsBaseNavigation /> <div className="">Hello world</div>
    </div>
  );
}

export default WebLayoutsBasePanel1;
