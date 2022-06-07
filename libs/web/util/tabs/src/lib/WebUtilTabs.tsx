import { Plus, EllipsisH, File } from '@nuldrive/web/util/icons';

import styles from './WebUtilTabs.module.css';

/* eslint-disable-next-line */
export interface WebUtilTabsProps {}

export function WebUtilTabs(props: WebUtilTabsProps) {
  return (
    <div className="grow overflow-scroll tabs_component">
      <div className="overflow-scroll">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
          <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">school</p>
            </button>
            <button className="flex h-[41px] sticky left-0  w-max bg-white items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] border-t-[#ED7547] border">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">work</p>
            </button>
            <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasglobe.min.js</p>
            </button>
            <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">Quick Access</p>
            </button>
            <button className="flex h-[41px] bg-white items-center w-max gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasvideo.min.js</p>
            </button>
            <button className="flex h-[41px] bg-white  items-center w-max gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasglider.min.js</p>
            </button>
            <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">nuldrive.min.js</p>
            </button>
            <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">work related</p>
            </button>
            <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">boom</p>
            </button>
            <button className="flex h-[41px] bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">katusch</p>
            </button>
          </div>

          <div className="flex gap-[11px] items-centers sticky right-0 z-50 bg-white px-[12px] border-l-border border-borderColor">
            <Plus fill="#6B6B6B" width={20} />
            <EllipsisH fill="#6B6B6B" width={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebUtilTabs;
