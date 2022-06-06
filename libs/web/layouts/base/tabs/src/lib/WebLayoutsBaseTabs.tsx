import { WebUtilAvatar } from '@nuldrive/web/util/avatar';

import styles from './WebLayoutsBaseTabs.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseTabsProps {}

export function WebLayoutsBaseTabs(props: WebLayoutsBaseTabsProps) {
  return (
    <div className="border-b-border h-tabs">
      <div className="h-full flex">
        <div className="w-[256px] flex-none h-full border-r-border border-borderColor">
          <div className="flex justify-between h-full pl-[14px] pr-[7px] items-center">
            <div className="h-[26px]">
              <WebUtilAvatar
                src="https://r2.eriascdn.com/erias.png"
                width={26}
              />
            </div>
            <div className="flex gap-[5px] text-[11px]">
              <button className="bg-[#EDEDED] rounded-[4px]">
                <p className="px-[7px] py-[2px] font-semibold">New</p>
              </button>
              <button className="bg-[#EDEDED] rounded-[4px]">
                <p className="px-[7px] py-[2px] font-semibold">Import</p>
              </button>
            </div>
          </div>
        </div>
        <div className="grow w-auto">
          <div className="">Hello world</div>
        </div>
        <div className="w-[227px] flex-none border-l-border border-borderColor">
          Hello world
        </div>
      </div>
    </div>
  );
}

export default WebLayoutsBaseTabs;
