import { AngleDown, Eye } from '@nuldrive/web/util/icons';

import styles from './WebUtilEnvironment.module.css';

/* eslint-disable-next-line */
export interface WebUtilEnvironmentProps {}

export function WebUtilEnvironment(props: WebUtilEnvironmentProps) {
  return (
    <div className="w-[227px] flex-none border-l-border border-borderColor hidden lg:block">
      <div className="flex h-full justify-between items-center gap-[23px] pl-[21px] pr-[14px]">
        <div className="flex gap-[34px] cursor-pointer">
          <p className="text-[12px] text-[#6B6B6B]">No Environment</p>
          <AngleDown width={21} fill="#6B6B6B" />
        </div>
        <Eye width={18} fill="#6B6B6B" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default WebUtilEnvironment;
