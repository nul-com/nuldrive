import { WebUtilAvatar } from '@nuldrive/web/util/avatar';
import { WebUtilButtonsBucketSelect } from '@nuldrive/web/util/buttons/bucketSelect';
import { WebUtilTabs } from '@nuldrive/web/util/tabs';
import { WebUtilEnvironment } from '@nuldrive/web/util/environment';

import styles from './WebLayoutsBaseMenu.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseMenuProps {}

export function WebLayoutsBaseMenu(props: WebLayoutsBaseMenuProps) {
  return (
    <div className="h-menu border-b-border border-borderColor md:border-b-0">
      <div className="h-full flex">
        <WebUtilButtonsBucketSelect />
        <WebUtilTabs />
        <WebUtilEnvironment />
      </div>
    </div>
  );
}

export default WebLayoutsBaseMenu;
