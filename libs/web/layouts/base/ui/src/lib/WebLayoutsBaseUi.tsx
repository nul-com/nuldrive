import { ReactChild } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';
import { WebUtilSearch } from '@nuldrive/web/util/search';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  return (
    <main className="grid grid-template-rows h-screen w-screen overflow-hidden">
      <WebLayoutsBaseHeader />
      <div className="overflow-scroll">{children}</div>
      <div className="text-sm">Hello World</div>
    </main>
  );
}

export default WebLayoutsBaseUi;
