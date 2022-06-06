import { Search, Command } from '@nuldrive/web/util/icons';

import styles from './WebUtilButtonsSearch.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsSearchProps {}

export function WebUtilButtonsSearch(props: WebUtilButtonsSearchProps) {
  return (
    <button
      // onClick={toggleModals}
      className="bg-primaryColor border-searchBarBorder border-2 pl-4 py-1 pr-2 rounded-xl cursor-pointer w-full"
    >
      <div className="flex justify-between text-black">
        <div className="flex items-center gap-2">
          <span className="w-5">
            <Search />
          </span>
          <p className="font-medium text-lg">Search</p>
        </div>
        <div className="flex items-center gap-1">
          <kbd className="self-center rounded-md border-searchBarBorder border-2 px-1 py-0.5">
            <span className="text-sm">
              <Command width="1em" height="1em" />
            </span>
          </kbd>
          <kbd className="text-center rounded-md border-searchBarBorder border-2 px-1.5 h-[22px]">
            <p className="-translate-y-[3px]">K</p>
          </kbd>
        </div>
      </div>
    </button>
  );
}

export default WebUtilButtonsSearch;
