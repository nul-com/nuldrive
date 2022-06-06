import { ReactChild, useRef, useState, useEffect } from 'react';
import { WebLayoutsBaseHeader } from '@nuldrive/web/layouts/base/header';
import styles from './WebLayoutsBaseUi.module.css';
import { WebUtilSearch } from '@nuldrive/web/util/search';
import { default as SplitGrid } from 'react-split-grid';
import { default as Split } from 'react-split';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {
  children: ReactChild;
}

type SplitType = {
  split: {
    setSizes: (number: number[]) => void;
  };
};

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  const { children } = props;
  const splitRef = useRef<any>(undefined);
  const [sizes, setSizes] = useState<any>([5, 90, 5]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('sizes')!);
    if (items) {
      setSizes(items);
    }
  }, []);

  let maxW = '40px';
  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden">
      <WebLayoutsBaseHeader />
      <div className="h-full">
        {/* <SplitGrid
          // minSize={40}
          // columnMinSize={200}

          // columnMinSizes={{ 0: 40, 2: 40, 4: 40 }}
          columnMaxSizes={{ 0: 300, 2: 1000, 4: 300 }}
          columnCursor="col-resize"
          rowCursor="row-resize"
        >
          {({
            getGridProps,
            getGutterProps,
          }: {
            getGridProps: any;
            getGutterProps: any;
          }) => (
            <div className="grid-container" {...getGridProps()}>
              <div className="grid-item item1">
                Column One
              </div>
              <div
                className={'grid-gutter item2 gutter-horizontal'}
                {...getGutterProps('column', 1)}
              />
              <div className={'grid-item item3'}>Column Two</div>
              <div
                className={'grid-gutter item4 gutter-horizontal'}
                {...getGutterProps('column', 3)}
              />
              <div className={'grid-item item5'}>Column Three</div>
            </div>
          )}
        </SplitGrid> */}
        {/* <Split minSize={100} cursor="col-resize">
          {({
            getGridProps,
            getGutterProps,
          }: {
            getGridProps: any;
            getGutterProps: any;
          }) => (
            <div className="grid grid-cols-3 grid-flow-row" {...getGridProps()}>
              <div className="border-2 border-black p-3">One element</div>
              <div {...getGutterProps('column', 1)} />
              <div className="border-2 border-black p-3">two element</div>
              <div {...getGutterProps('row', 1)} />
              <div className="border-2 border-black p-3">three element</div>
              <div {...getGutterProps('column', 1)} />
              <div className="border-2 border-black p-3">four element</div>
            </div>
          )}
        </Split> */}

        <Split
          className="flex flex-row h-full"
          ref={splitRef}
          sizes={sizes}
          minSize={[71, 800, 48]}
          maxSize={[380, Infinity, 323]}
          snapOffset={100}
          gutterSize={1}
          onDrag={(sizes) => {
            // console.log(sizes);
            localStorage.setItem('sizes', JSON.stringify(sizes));
            console.log(sizes[0]);
            if (sizes[0] > 200) {
              console.log('setSize');
              if (splitRef.current as SplitType) {
                splitRef.current.split.setSizes([200, 800, 48]);
              }
            }
          }}
        >
          <div className="flex-none w-12">Menu</div>
          <div className="">{children}</div>
          <div className="flex-none w-12 bg-cyan-300">Sidebar</div>
        </Split>
      </div>
      <div className="text-sm h-footer border-t-[1px] border-borderColor flex items-center">
        Hello World
      </div>
    </main>
  );
}

export default WebLayoutsBaseUi;
