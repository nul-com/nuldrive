import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Logo } from '@nuldrive/web/util/icons';
import { CloudUpload } from '@nuldrive/web/util/icons';
import { Apps, Octagon, Bell } from '@nuldrive/web/util/icons';
import { WebLayoutsBaseNavigation } from '@nuldrive/web/layouts/base/navigation';
import { WebUtilButtonsSync } from '@nuldrive/web/util/buttons/sync';
import { WebUtilButtonsInvite } from '@nuldrive/web/util/buttons/invite';
import { WebUtilAvatar } from '@nuldrive/web/util/avatar';
import { WebUtilButtonsUpgrade } from '@nuldrive/web/util/buttons/upgrade';

import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  return (
    <header className="grid h-header w-screen bottom-0 left-0 z-40 bg-primaryColor md:top-0 border-b-border border-borderColor">
      <nav className="max-w-header ml-6 mr-5 flex h-header justify-between items-center text-black md:mx-[14px]">
        <Link href="/">
          <div className="cursor-pointer flex gap-1.5 items-center">
            <div className="w-[34px]">
              <Logo />
            </div>
            <div className="flex gap-1">
              <h1 className="font-extrabold text-lg md:hidden">nuldrive</h1>
              <p className="text-xxs text-countryCode font-medium md:hidden">
                AT
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <div className="px-2.5 py-1 border-[1px] border-black rounded-3xl text-sm font-semibold mr-3 md:hidden">
              Open Chat
            </div>
          </Link>
          <div className="w-5 md:hidden" onClick={() => setNavMenuOpen(true)}>
            <Apps />
          </div>
          <div className="hidden md:flex items-center gap-[15px]">
            <WebUtilButtonsSync />
            <WebUtilButtonsInvite />
            <Octagon fill="#6B6B6B" width={18} />
            <Bell fill="#6B6B6B" width={18} />
            <WebUtilAvatar src="https://r2.eriascdn.com/erias.png" width={22} />
            <WebUtilButtonsUpgrade />
          </div>
        </div>
      </nav>

      <Transition appear show={navMenuOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={() => setNavMenuOpen(false)}>
          {/* <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="" />
          </Transition.Child> */}

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="-bottom-40"
            enterTo="bottom-0"
            leave="ease-in duration-200"
            leaveFrom="bottom-0"
            leaveTo="-bottom-40"
          >
            <div className="fixed bottom-0">
              <WebLayoutsBaseNavigation setNavMenuOpen={setNavMenuOpen} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}

export default WebLayoutsBaseHeader;
