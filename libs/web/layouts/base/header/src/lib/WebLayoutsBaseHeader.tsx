import Link from 'next/link';
import { Logo } from '@nuldrive/web/util/icons';
import { CloudUpload } from '@nuldrive/web/util/icons';
import { Apps } from '@nuldrive/web/util/icons';

import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  return (
    <header className="fixed w-screen bottom-0 left-0 z-40 bg-primaryColor shadow-2xl shadow-searchBarBg">
      <nav className="max-w-header ml-6 mr-5 h-header flex justify-between items-center text-black">
        <Link href="/">
          <div className="cursor-pointer flex gap-1.5 items-center">
            <div className="w-7.5">
              <Logo />
            </div>
            <div className="flex gap-1">
              <h1 className="font-extrabold text-lg">nuldrive</h1>
              <p className="text-xxs text-countryCode font-medium">AT</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <div className="px-2.5 py-1 border-[1px] border-black rounded-3xl text-sm font-semibold mr-3">
              Open Chat
            </div>
          </Link>
          <div className="w-5">
            <Apps />
          </div>
        </div>
      </nav>
      {/* <NavMenu
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
      /> */}
    </header>
  );
}

export default WebLayoutsBaseHeader;
