import { Fragment, ReactChild } from 'react';
import { WebLayoutsLandingHeader } from '@nuldrive/web/layouts/landing/header';

import styles from './WebLayoutsLandingUi.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingUiProps {
  children: ReactChild;
}

export function WebLayoutsLandingUi(props: WebLayoutsLandingUiProps) {
  const { children } = props;
  return (
    <div className="overflow-hidden flex flex-col min-h-screen font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <WebLayoutsLandingHeader />
      {children}
    </div>
  );
}

export default WebLayoutsLandingUi;
