import { Search, Command } from '@nuldrive/web/util/icons';

import styles from './WebUtilButtonsSearch.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsSearchProps {}

export function WebUtilButtonsSearch(props: WebUtilButtonsSearchProps) {
  return (
    <button
      // onClick={toggleModals}
      className="bg-[#F2F2F2] border-[#E8E8E8] border-2 pl-4 py-auto pr-2 rounded-xl cursor-pointer w-full h-full"
    >
      <div className="flex justify-between text-[#8494AA]">
        <div className="flex items-center gap-2">
          <span className="w-[16px] fill-[#8494AA]">
            <Search />
          </span>
          <p className="font-medium text-[14px]">Search</p>
        </div>
        <div className="flex items-center gap-1">
          <kbd className="self-center rounded-md border-[#E8E8E8] border-2 px-1 py-0.5">
            <span className="w-[10px] fill-[#8494AA]">
              <Command width={10} />
            </span>
          </kbd>
          <kbd className="text-center rounded-md border-[#E8E8E8] border-2 w-[17px] h-[18px]">
            <p className="-translate-y-[2px] text-[12px]">K</p>
          </kbd>
        </div>
      </div>
    </button>
  );
}

export default WebUtilButtonsSearch;
