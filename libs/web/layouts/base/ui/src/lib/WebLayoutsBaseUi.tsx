import { ReactChild } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  return (
    <main className="">
      <div className="fixed">
        <WebLayoutsBaseHeader />
      </div>
      {children}
    </main>
  );
}

export default WebLayoutsBaseUi;
