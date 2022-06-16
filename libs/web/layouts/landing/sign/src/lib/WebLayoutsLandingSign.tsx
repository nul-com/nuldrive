import { ReactChild } from 'react';
import { WebLayoutsLandingHeader } from '@nuldrive/web/layouts/landing/header';

import styles from './WebLayoutsLandingSign.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSignProps {
  children: ReactChild;
}

export function WebLayoutsLandingSign(props: WebLayoutsLandingSignProps) {
  const { children } = props;
  return (
    <div className="overflow-hidden flex flex-col min-h-screen h-screen font-inter antialiased bg-slate-900 text-gray-200 tracking-tight">
      <WebLayoutsLandingHeader />
      {children}
    </div>
  );
}

export default WebLayoutsLandingSign;
