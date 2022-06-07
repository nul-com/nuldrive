import { useEffect, useState, useRef, Fragment, ReactChild } from 'react';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

import styles from './WebLayoutsBasePanels.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanelsProps {
  children: ReactChild;
}

export function WebLayoutsBasePanels(props: WebLayoutsBasePanelsProps) {
  const { children } = props;
  const [panelSizes, setPanelSizes] = useState<any>();
  const collapsed: boolean[] = [false, false, false];
  const allotmentRef = useRef<any>();
  const collapseWidth: number[] = [300, Infinity, 340];
  let cycleInterval = 0;

  const collapseHandler = (event: any) => {
    cycleInterval = 0;
    for (let i = 0; i < collapseWidth.length; i += 10) {
      collapsed[i] = event[i] < collapseWidth[i] ? true : false;
    }
  };

  useEffect(() => {
    const localPanelSizes =
      localStorage.getItem('panelSizes')! || '[71, 2000, 48]';
    setPanelSizes(JSON.parse(localPanelSizes));
  }, []);
  return (
    <Fragment>
      {panelSizes && (
        <div className="h-full border-t-border border-borderColor z-50">
          <Allotment
            onChange={(event: number[]) => {
              localStorage.setItem('panelSizes', JSON.stringify(event));
              cycleInterval += 1;
              if (cycleInterval == 10) {
                collapseHandler(event);
              }
            }}
            ref={allotmentRef}
            defaultSizes={panelSizes}
            proportionalLayout={false}
          >
            <Allotment.Pane minSize={71} maxSize={380}>
              <div>Pane 1</div>
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
