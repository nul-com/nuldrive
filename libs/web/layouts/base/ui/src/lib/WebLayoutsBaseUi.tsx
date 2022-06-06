import { ReactChild, useRef, useState, useEffect } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';
import { WebUtilSearch } from '@nuldrive/web/util/search';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  const [panelSizes, setPanelSizes] = useState<any>();

  useEffect(() => {
    const localPanelSizes = localStorage.getItem('panelSizes')!;
    setPanelSizes(JSON.parse(localPanelSizes));
  }, []);
  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden">
      <WebLayoutsBaseHeader />
      {panelSizes && (
        <div className="h-full">
          <Allotment
            onChange={(event) =>
              localStorage.setItem('panelSizes', JSON.stringify(event))
            }
            defaultSizes={panelSizes}
            proportionalLayout={false}
          >
            <Allotment.Pane minSize={71} maxSize={380}>
              <div>Pane 1</div>
            </Allotment.Pane>
            <Allotment.Pane>
              <div>Pane 1</div>
            </Allotment.Pane>
            <Allotment.Pane minSize={48} maxSize={380} preferredSize={'50px'}>
              <div>Pane 1</div>
            </Allotment.Pane>
          </Allotment>
        </div>
      )}
      <div className="text-sm h-footer border-t-[1px] border-borderColor flex items-center">
        Hello World
      </div>
    </main>
  );
}

export default WebLayoutsBaseUi;
