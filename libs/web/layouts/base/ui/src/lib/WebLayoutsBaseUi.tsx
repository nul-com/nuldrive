import { ReactChild, useRef, useState, useEffect } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';
import { WebLayoutsBasePanels } from '@nuldrive/web/layouts/base/panels';

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
      <WebLayoutsBasePanels children={children} />
      <div className="text-sm h-footer border-t-[1px] border-borderColor flex items-center">
        Hello World
      </div>
    </main>
  );
}

export default WebLayoutsBaseUi;
