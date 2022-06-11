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
    <Fragment>
      <WebLayoutsLandingHeader />
    </Fragment>
  );
}

export default WebLayoutsLandingUi;
