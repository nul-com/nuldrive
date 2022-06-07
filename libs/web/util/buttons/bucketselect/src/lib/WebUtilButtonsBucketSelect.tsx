import { AngleDown } from '@nuldrive/web/util/icons';
import { WebUtilAvatar } from '@nuldrive/web/util/avatar';

import styles from './WebUtilButtonsBucketSelect.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsBucketSelectProps {}

export function WebUtilButtonsBucketSelect(
  props: WebUtilButtonsBucketSelectProps
) {
  return (
    <div className="w-auto md:w-[256px] flex-none h-full border-r-border border-borderColor">
      <div className="flex justify-between h-full pl-[14px] pr-[7px] items-center">
        <div className="flex gap-[9px] justify-center items-center">
          <div className="h-[26px]">
            <WebUtilAvatar src="https://r2.eriascdn.com/erias.png" width={26} />
          </div>
          <button className="">
            <div className="flex gap-[2px] items-center rounded-[4px] pl-[7px] pr-[2px] py-[3px] transition-all duration-200 hover:bg-[#EDEDED]">
              <p className="text-[11px] font-semibold">school</p>
              <AngleDown width={21} height={21}  fill="#6B6B6B" />
            </div>
          </button>
        </div>
        <div className="hidden md:flex gap-[5px] text-[11px]">
          <button className="bg-[#EDEDED] rounded-[4px]">
            <p className="px-[7px] py-[2px] font-semibold">New</p>
          </button>
          <button className="bg-[#EDEDED] rounded-[4px]">
            <p className="px-[7px] py-[2px] font-semibold">Import</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebUtilButtonsBucketSelect;
