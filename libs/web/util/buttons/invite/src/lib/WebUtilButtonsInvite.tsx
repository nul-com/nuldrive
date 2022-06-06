import { UserPlus } from '@nuldrive/web/util/icons';

import styles from './WebUtilButtonsInvite.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsInviteProps {}

export function WebUtilButtonsInvite(props: WebUtilButtonsInviteProps) {
  return (
    <button className="bg-blue rounded-[6px]">
      <div className="flex justify-center items-center gap-[5px] px-[8px] py-[3.5px]">
        <div className="w-[17px] fill-white">
          <UserPlus />
        </div>
        <div className="text-white text-[11px]">Invite</div>
      </div>
    </button>
  );
}

export default WebUtilButtonsInvite;
