import { WebLayoutsBaseNavigation } from '@nuldrive/web/layouts/base/navigation';
import { WebUtilButtonsSearch } from '@nuldrive/web/util/buttons/search';
import { useEffect, useRef, useState } from 'react';
import { webUtilResize } from '@nuldrive/web/util/resize';
import { Search } from '@nuldrive/web/util/icons';

import styles from './WebLayoutsBasePanel1.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanel1Props {}

export function WebLayoutsBasePanel1(props: WebLayoutsBasePanel1Props) {
  const divRef = useRef<any>();
  const size: any = webUtilResize(divRef, [
    { 0: 97 }, // xsmall
    { 1: 160 }, // small
    { 2: 190 }, // medium
    { 3: 245 }, // large
    { 4: 250 }, // xlarge
    { 5: 1000 }, // xxlarge
  ]);

  return (
    <div className="hidden md:flex md:h-full" ref={divRef}>
      <div className="">
        <WebLayoutsBaseNavigation size={size} />
      </div>
      {size != 0 ? (
        <div className="h-[34px] w-full px-3 mt-[13px]">
          <WebUtilButtonsSearch size={size} />
        </div>
      ) : (
        <div className="origin-top-left rotate-90 translate-x-[28px] translate-y-[14px]">
          <div className="flex gap-[9px]">
            <Search width="16" fill="#8494AA" />
            <p className="text-[#8494AA] font-medium text-[14px]">Search</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WebLayoutsBasePanel1;
