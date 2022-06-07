import {
  Swatchbook,
  Terminal,
  Cookie,
  GraduationCap,
  CheckCircle,
  LockOpen,
  Diamond,
  Trash,
  WebGrid,
  QuestionCircle,
} from '@nuldrive/web/util/icons';

import styles from './WebLayoutsBaseFooter.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseFooterProps {}

export function WebLayoutsBaseFooter(props: WebLayoutsBaseFooterProps) {
  return (
    <div className="hidden md:flex text-sm h-footer border-t-[1px] border-borderColor items-center overflow-hidden">
      <div className="flex justify-between items-center w-full px-[16px] text-[#6B6B6B]">
        <div className="flex gap-[15px] items-center">
          <Swatchbook width={13} fill="#6B6B6B" className="cursor-pointer" />
          <div className="flex gap-[4px] items-center cursor-pointer">
            <Terminal width={13} fill="#6B6B6B" />
            <p className="text-[10px]">Console</p>
          </div>
        </div>
        <div className="flex gap-[18px] items-center ">
          <div className="flex gap-[4px] items-center cursor-pointer">
            <Cookie width={13} fill="#6B6B6B" />
            <p className="text-[10px]">Cookies</p>
          </div>
          <div className="flex gap-[4px] items-center cursor-pointer">
            <GraduationCap width={13} fill="#6B6B6B" />
            <p className="text-[10px]">Bootcamp</p>
          </div>
          <div className="flex gap-[4px] items-center cursor-pointer">
            <div className="w-[11px] h-[11px] bg-[#17CE13] rounded-full"></div>
            <p className="text-[10px]">Status</p>
          </div>
          <div className="flex gap-[4px] items-center cursor-pointer">
            <CheckCircle width={13} fill="#17CE13" />
            <p className="text-[10px]">Auto-select-agent</p>
          </div>
          <div className="flex gap-[4px] items-center cursor-pointer">
            <LockOpen width={13} fill="#17CE13" />
            <p className="text-[10px]">Access</p>
          </div>
          <div className="flex gap-[4px] items-center cursor-pointer">
            <Diamond width={13} fill="#6B6B6B" />
            <p className="text-[10px]">Runner</p>
          </div>
          <div className="flex gap-[4px] items-center cursor-pointer">
            <Trash width={13} fill="#6B6B6B" />
            <p className="text-[10px]">Trash</p>
          </div>
          <WebGrid width={13} fill="#6B6B6B" className="cursor-pointer" />
          <QuestionCircle
            width={13}
            fill="#6B6B6B"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default WebLayoutsBaseFooter;
