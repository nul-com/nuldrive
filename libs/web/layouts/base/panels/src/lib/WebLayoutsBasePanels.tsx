import { useEffect, useState, useRef, Fragment, ReactChild } from 'react';
import { Allotment } from 'allotment';
import { WebLayoutsBasePanel1 } from '@nuldrive/web/layouts/base/panel1';

import 'allotment/dist/style.css';
import styles from './WebLayoutsBasePanels.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanelsProps {
  children: ReactChild;
}

export function WebLayoutsBasePanels(props: WebLayoutsBasePanelsProps) {
  const { children } = props;
  const [panelSizes, setPanelSizes] = useState<any>();
  let panelWidth: number[] = [];
  const allotmentRef = useRef<any>();

  useEffect(() => {
    const localPanelSizes =
      localStorage.getItem('panelSizes')! || '[71, 2000, 48]';
    setPanelSizes(JSON.parse(localPanelSizes));
  }, []);
  return (
    <Fragment>
      {panelSizes && (
        <div className="hidden md:block md:h-full md:border-t-border md:border-borderColor md:z-50">
          <Allotment
            onChange={(event: number[]) => {
              localStorage.setItem('panelSizes', JSON.stringify(event));
              panelWidth = event;
            }}
            ref={allotmentRef}
            defaultSizes={panelSizes}
            proportionalLayout={false}
          >
            <Allotment.Pane minSize={71} maxSize={380}>
              <WebLayoutsBasePanel1 />
            </Allotment.Pane>
            <Allotment.Pane>{children}</Allotment.Pane>
            <Allotment.Pane minSize={48} maxSize={380} preferredSize={'50px'}>
              <div>Pane 1</div>
            </Allotment.Pane>
          </Allotment>
        </div>
      )}
    </Fragment>
  );
}

export default WebLayoutsBasePanels;
