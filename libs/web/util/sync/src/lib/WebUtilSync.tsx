import { CloudCheck } from '@nuldrive/web/util/icons';

import styles from './WebUtilSync.module.css';

/* eslint-disable-next-line */
export interface WebUtilSyncProps {}

export function WebUtilSync(props: WebUtilSyncProps) {
  return (
    <div className="bg-[#EAFEF2] w-[30px] flex justify-center rounded-[11px] cursor-pointer">
      <div className="w-[20px] fill-[#377D3B]">
        <CloudCheck />
      </div>
    </div>
  );
}

export default WebUtilSync;
