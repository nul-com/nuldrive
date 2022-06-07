import { Bolt, Folder, User, Times } from '@nuldrive/web/util/icons';
import { WebUtilButtonsSearch } from '@nuldrive/web/util/buttons/search';
import { ListUi } from '@nuldrive/web/layouts/base/navigation';
import Link from 'next/link';

import styles from './WebLayoutsBaseNavigation.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseNavigationProps {
  setNavMenuOpen?: any;
}

export function WebLayoutsBaseNavigation(props: WebLayoutsBaseNavigationProps) {
  const { setNavMenuOpen } = props;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-5 drop-shadow-3xl rounded-2xl border-4 border-gray-700 z-100 md:relative md:w-[80px] md:pt-0 md:px-0 md:pb-0 md:bg-[#F9F9F9] md:h-full md:border-0 md:border-r-border md:border-borderColor md:rounded-none md:drop-shadow-none">
      <div className="grid gap-6 md:flex md:gap-0 md:h-full md:w-full md:py-[10px] md:justify-center overflow-scroll">
        <ListUi />
        <div className="flex justify-between items-center md:hidden">
          <div className="w-[80%] ml-3">
            <WebUtilButtonsSearch />
          </div>
          <span
            className="w-6 cursor-pointer text-titleColor mr-1"
            onClick={() => setNavMenuOpen(false)}
          >
            <Times />
          </span>
        </div>
      </div>
    </div>
  );
}

export default WebLayoutsBaseNavigation;
