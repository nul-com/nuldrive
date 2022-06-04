import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Logo } from '@nuldrive/web/util/icons';
import { CloudUpload } from '@nuldrive/web/util/icons';
import { Apps } from '@nuldrive/web/util/icons';
import { WebLayoutsBaseNavigation } from '@nuldrive/web/layouts/base/navigation';

import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
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
          <div className="w-5" onClick={() => setNavMenuOpen(true)}>
            <Apps />
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
              <WebLayoutsBaseNavigation />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}

export default WebLayoutsBaseHeader;
