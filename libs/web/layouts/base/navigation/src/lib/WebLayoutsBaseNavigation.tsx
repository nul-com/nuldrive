import { Bolt, Folder, User, Times } from '@nuldrive/web/util/icons';
import Link from 'next/link';

import styles from './WebLayoutsBaseNavigation.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseNavigationProps {
  setNavMenuOpen: any;
}

export function WebLayoutsBaseNavigation(props: WebLayoutsBaseNavigationProps) {
  const { setNavMenuOpen } = props;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-5 drop-shadow-3xl rounded-2xl border-4 border-gray-700 z-50">
      <div className="grid gap-6">
        <ul className="grid gap-8 grid-cols-3 text-black">
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5">
                  <Bolt />
                </span>
                <p className="">About</p>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5">
                  <Folder />
                </span>
                <p className="">FAQ</p>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/link">
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="w-5">
                  <User />
                </span>
                <p className="">User</p>
              </div>
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <div className="w-[80%] ml-3">
            {/* <SharedSearchButton
              setIsSearchOpen={setIsSearchOpen}
              setNavMenuOpen={setNavMenuOpen}
            /> */}
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
