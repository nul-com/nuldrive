import { ReactChild } from 'react';
import styles from './WebLayoutsBaseUi.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  return <div className="">{children}</div>;
}

export default WebLayoutsBaseUi;
