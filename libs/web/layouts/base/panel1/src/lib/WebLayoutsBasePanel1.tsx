import { WebLayoutsBaseNavigation } from '@nuldrive/web/layouts/base/navigation';
import { WebUtilButtonsSearch } from '@nuldrive/web/util/buttons/search';

import styles from './WebLayoutsBasePanel1.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanel1Props {}

export function WebLayoutsBasePanel1(props: WebLayoutsBasePanel1Props) {
  return (
    <div className="hidden md:flex md:h-full">
      <div className="">
        <WebLayoutsBaseNavigation />
      </div>
      <div className="h-[34px] w-full px-3 mt-[13px]">
        <WebUtilButtonsSearch />
      </div>
    </div>
  );
}

export default WebLayoutsBasePanel1;
