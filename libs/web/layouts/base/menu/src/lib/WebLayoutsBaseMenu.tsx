import { WebUtilAvatar } from '@nuldrive/web/util/avatar';
import { WebUtilButtonsBucketSelect } from '@nuldrive/web/util/buttons/bucketSelect';
import { WebUtilTabs } from '@nuldrive/web/util/tabs';

import styles from './WebLayoutsBaseMenu.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseMenuProps {}

export function WebLayoutsBaseMenu(props: WebLayoutsBaseMenuProps) {
  return (
    <div className="h-menu">
      <div className="h-full flex">
        <WebUtilButtonsBucketSelect />
        <WebUtilTabs />
        <div className="w-[227px] flex-none border-l-border border-borderColor">
          Hello world
        </div>
      </div>
    </div>
  );
}

export default WebLayoutsBaseMenu;
