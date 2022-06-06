import styles from './WebLayoutsBaseTabs.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseTabsProps {}

export function WebLayoutsBaseTabs(props: WebLayoutsBaseTabsProps) {
  return (
    <div className="border-b-border h-tabs">
      <div className="h-full flex">
        <div className="w-[256px] flex-none h-full border-r-border border-borderColor">
          Hello world
        </div>
        <div className="grow w-auto">
          <div className="">Hello world</div>
        </div>
        <div className="w-[227px] flex-none border-l-border border-borderColor">
          Hello world
        </div>
      </div>
    </div>
  );
}

export default WebLayoutsBaseTabs;
