import { AngleDown } from '@nuldrive/web/util/icons';

import styles from './WebUtilButtonsBucketSelect.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsBucketSelectProps {}

export function WebUtilButtonsBucketSelect(
  props: WebUtilButtonsBucketSelectProps
) {
  return (
    <button className="">
      <div className="flex gap-[2px] rounded-[4px] pl-[7px] pr-[2px] py-[4px] transition-all duration-200 hover:bg-[#EDEDED]">
        <p className="text-[11px]">school</p>
        <AngleDown width={21} fill="#6B6B6B" />
      </div>
    </button>
  );
}

export default WebUtilButtonsBucketSelect;
