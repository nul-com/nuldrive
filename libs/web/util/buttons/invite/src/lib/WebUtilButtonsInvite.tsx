import { UserPlus } from '@nuldrive/web/util/icons';

import styles from './WebUtilButtonsInvite.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsInviteProps {}

export function WebUtilButtonsInvite(props: WebUtilButtonsInviteProps) {
  return (
    <button className="w-[67px] h-[24px] bg-blue rounded-[6px] flex justify-center items-center gap-[5px]">
      <div className="w-[17px] fill-white">
        <UserPlus />
      </div>
      <div className="text-white text-[11px]">Invite</div>
    </button>
  );
}

export default WebUtilButtonsInvite;
