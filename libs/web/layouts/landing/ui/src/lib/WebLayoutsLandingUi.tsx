import { Fragment, ReactChild, useEffect } from 'react';
import { WebLayoutsLandingHeader } from '@nuldrive/web/layouts/landing/header';
import { WebLayoutsLandingFooter } from '@nuldrive/web/layouts/landing/footer';
import AOS from 'aos';

import styles from './WebLayoutsLandingUi.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingUiProps {
  children: ReactChild;
}

export function WebLayoutsLandingUi(props: WebLayoutsLandingUiProps) {
  useEffect(() => {
    AOS.init({
      // once: true,
      // disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });
  const { children } = props;
  return (
    <div className="overflow-hidden flex flex-col min-h-screen font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <WebLayoutsLandingHeader />
      {children}
      <WebLayoutsLandingFooter />
    </div>
  );
}

export default WebLayoutsLandingUi;
