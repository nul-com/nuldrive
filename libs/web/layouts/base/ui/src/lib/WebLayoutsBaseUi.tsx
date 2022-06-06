import { ReactChild, useRef, useState, useEffect } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';
import { WebUtilSearch } from '@nuldrive/web/util/search';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

type SplitType = {
  split: {
    setSizes: (number: number[]) => void;
  };
};

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  const splitRef = useRef<any>(undefined);
  const [sizes, setSizes] = useState<any>([5, 90, 5]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('sizes')!);
    if (items) {
      setSizes(items);
    }
  }, []);

  let maxW = '40px';
  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden">
      <WebLayoutsBaseHeader />
      <div className="h-full">
      </div>
      <div className="text-sm h-footer border-t-[1px] border-borderColor flex items-center">
        Hello World
      </div>
    </main>
  );
}

export default WebLayoutsBaseUi;
