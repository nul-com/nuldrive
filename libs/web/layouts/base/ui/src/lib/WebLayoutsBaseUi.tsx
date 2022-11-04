import { ReactChild, useRef, useState, useEffect } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';
import { WebLayoutsBasePanels } from '@nuldrive/web/layouts/base/panels';
import { WebLayoutsBaseFooter } from '@nuldrive/web/layouts/base/footer';
import { WebLayoutsBaseMenu } from '@nuldrive/web/layouts/base/menu';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  const [panelSizes, setPanelSizes] = useState<any>();
  const allotmentRef = useRef<any>();

  useEffect(() => {
    const localPanelSizes = localStorage.getItem('panelSizes')!;
    setPanelSizes(JSON.parse(localPanelSizes));
  }, []);
  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden">
      <WebLayoutsBaseHeader />
      <WebLayoutsBaseMenu />
      <WebLayoutsBasePanels children={children} />
      <WebLayoutsBaseFooter />
    </main>
  );
}

export default WebLayoutsBaseUi;
