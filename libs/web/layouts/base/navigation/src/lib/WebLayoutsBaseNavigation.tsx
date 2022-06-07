import { Bolt, Folder, User, Times } from '@nuldrive/web/util/icons';
import { WebUtilButtonsSearch } from '@nuldrive/web/util/buttons/search';
import Link from 'next/link';

import styles from './WebLayoutsBaseNavigation.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseNavigationProps {
  setNavMenuOpen?: any;
}

export function WebLayoutsBaseNavigation(props: WebLayoutsBaseNavigationProps) {
  const { setNavMenuOpen } = props;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-5 drop-shadow-3xl rounded-2xl border-4 border-gray-700 z-50 md:relative md:w-[80px] md:pt-0 md:px-0 md:pb-0 md:bg-[#F9F9F9] md:h-full md:border-0 md:border-r-border md:border-borderColor md:rounded-none md:drop-shadow-none">
      <div className="grid gap-6 md:flex md:gap-0 h-full w-full md:py-[10px] md:justify-center">
        <ul className="grid gap-8 grid-cols-3 text-black md:flex md:flex-col md:gap-[25px] md:fill-[#6B6B6B] md:text-[#6B6B6B]">
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5 md:w-[17px]">
                  <Bolt />
                </span>
                <p className="md:text-[10px]">Quick</p>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5 md:w-[17px]">
                  <Folder />
                </span>
                <p className="md:text-[10px]">Collections</p>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5 md:w-[17px]">
                  <User />
                </span>
                <p className="md:text-[10px]">Photos</p>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5 md:w-[17px]">
                  <Bolt />
                </span>
                <p className="md:text-[10px]">Share</p>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5 md:w-[17px]">
                  <Bolt />
                </span>
                <p className="md:text-[10px]">About</p>
              </div>
            </Link>
          </li>
        </ul>
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
