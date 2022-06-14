import { Sort, Folder, Bolt, Plus } from '@nuldrive/web/util/icons';
import { WebUtilAvatar } from '@nuldrive/web/util/avatar';

import styles from './WebLayoutsBaseSidebar.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseSidebarProps {}

export function WebLayoutsBaseSidebar(props: WebLayoutsBaseSidebarProps) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex h-full">
        <div className="pl-[15px] flex flex-col pr-[22px] pt-[15px] translate-y-[3px] gap-[25px]">
          <button className="group flex flex-col items-center transition-all duration-1000 fill-[#6B6B6B]">
            <Sort width={18} className="transform rotate-90" />
            <p
              className="transition-all duration-1000 group-hover:block transform text-center text-[14px] text-[#6B6B6B] font-medium pt-[5px]"
              style={{ writingMode: 'vertical-rl' }}
            >
              Metadata
            </p>
          </button>
          <button className="group flex flex-col items-center transition-all duration-1000 fill-[#6B6B6B]">
            <Folder width={18} className="transform" />
            <p
              className="hidden relative transition-all duration-1000 group-hover:block transform text-center text-[14px] text-[#6B6B6B] font-medium pt-[5px]"
              style={{ writingMode: 'vertical-rl' }}
            >
              Folder
            </p>
          </button>
          <button className="group flex flex-col items-center transition-all duration-1000 fill-[#6B6B6B]">
            <Bolt width={18} className="transform " />
            <p
              className="hidden transition-all duration-1000 group-hover:block transform text-center text-[14px] text-[#6B6B6B] font-medium pt-[5px]"
              style={{ writingMode: 'vertical-rl' }}
            >
              Bolt
            </p>
          </button>
        </div>
        <div className="flex flex-col gap-[13px] pt-[15px] min-w-[190px] pr-[10px] w-full">
          <h3 className="text-[16px] font-semibold">Metadata</h3>
          <div className="grid gap-[26px] min-w-[100px]">
            <div className="flex flex-col gap-[13px]">
              <h4 className="text-[13px] font-semibold">General:</h4>
              <ul className="grid gap-[3px] gap-x-[11px] grid-cols-sidebar text-[12px]">
                <p className="text-[#5B5B5B] text-right">Kind:</p>
                <p className="">PNG image</p>
                <p className="text-[#5B5B5B] text-right">Size:</p>
                <p className="">708.816 bytes (713KB on disk)</p>
                <p className="text-[#5B5B5B] text-right">Created:</p>
                <p className="">Monday, 25. April 2022 at 21:39</p>
                <p className="text-[#5B5B5B] text-right">Modified:</p>
                <p className="">Monday, 26. April 2022 at 21:39</p>
              </ul>
            </div>
            <div className="flex flex-col gap-[13px]">
              <h4 className="text-[13px] font-semibold">General:</h4>
              <ul className="grid gap-[3px] gap-x-[11px] grid-cols-sidebar text-[12px]">
                <p className="text-[#5B5B5B] text-right">Last opened::</p>
                <p className="">4. May 2022 at 13:54</p>
                <p className="text-[#5B5B5B] text-right">Dimension:</p>
                <p className="">1920 x 1080</p>
                <p className="text-[#5B5B5B] text-right">Colour space:</p>
                <p className="">RGB</p>
                <p className="text-[#5B5B5B] text-right">Colour profile:</p>
                <p className="">PMO S271-IFC</p>
                <p className="text-[#5B5B5B] text-right">Alpha channel:</p>
                <p className="">Yes</p>
              </ul>
            </div>
            <div className="relative min-w-[250px]"></div>
            <div className="flex flex-col gap-[13px]">
              <div className="flex justify-between">
                <h4 className="text-[13px] font-semibold">Sharing:</h4>
                <div className="flex gap-[6px] bg-[#F7F6F9] py-[3px] px-[6px] rounded-[4px]">
                  <Plus width={16} fill="#0092E4" />
                  <p className="text-[12px] text-[#5B5B5B]">New</p>
                </div>
              </div>
              <ul className="grid gap-[11px] text-[12px]">
                <li className="flex justify-between w-full items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="-space-x-[9px] flex">
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                    </div>
                    <p className="">Elias Cerne (me)</p>
                  </div>
                  <button className="flex gap-[3px] justify-center bg-[#F7F6F9] w-[94px] h-[27px] rounded-[5px] items-center">
                    <Sort width={15} fill="#0092E4" />
                    <p className="text-[11px]">Read/Write</p>
                  </button>
                </li>
                <li className="flex justify-between w-full items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="-space-x-[9px] flex">
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                    </div>
                    <p className="">Ahmed Celen</p>
                  </div>
                  <button className="flex gap-[3px] justify-center bg-[#F7F6F9] w-[94px] h-[27px] rounded-[5px] items-center">
                    <Sort width={15} fill="#0092E4" />
                    <p className="text-[11px]">Read/Write</p>
                  </button>
                </li>
                <li className="flex justify-between w-full items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="-space-x-[9px] flex">
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                    </div>
                    <p className="">Swing Gro fdg gsgrgt ggr reefup</p>
                  </div>
                  <button className="flex gap-[3px] justify-center bg-[#F7F6F9] w-[94px] h-[27px] rounded-[5px] items-center">
                    <Sort width={15} fill="#0092E4" />
                    <p className="text-[11px]">Read/Write</p>
                  </button>
                </li>
                <li className="flex justify-between w-full items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="-space-x-[9px] flex">
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                    </div>
                    <p className="">AUT</p>
                  </div>
                  <button className="flex gap-[3px] justify-center bg-[#F7F6F9] px-[21px] h-[27px] rounded-[5px] items-center">
                    <Sort width={15} fill="#0092E4" />
                    <p className="text-[11px]">Write</p>
                  </button>
                </li>
                <li className="flex justify-between w-full items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="-space-x-[9px] flex">
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                      <WebUtilAvatar
                        width={22}
                        height={22}
                        src="https://r2.eriascdn.com/erias.png"
                      />
                    </div>
                    <p className="">Math class</p>
                  </div>
                  <button className="flex gap-[3px] justify-center bg-[#F7F6F9] w-[94px] h-[27px] rounded-[5px] items-center">
                    <Sort width={15} fill="#0092E4" />
                    <p className="text-[11px]">Read</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">Hello world</div>
    </div>
  );
}

export default WebLayoutsBaseSidebar;
