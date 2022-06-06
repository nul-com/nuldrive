import { AngleDown } from '@nuldrive/web/util/icons';
import styles from './WebUtilButtonsUpgrade.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsUpgradeProps {}

export function WebUtilButtonsUpgrade(props: WebUtilButtonsUpgradeProps) {
  return (
    <div className=" flex justify-between bg-[#F2F2F2] rounded-[4px]">
      <div className="flex w-full items-center justify-center">
        <p className="text-[11px] px-[16px] py-[5.5px] font-medium text-[#494949]">Upgrade</p>
      </div>
      <div className="w-[23px] border-l-[1px] border-[#E1E1E1] self-center">
        <AngleDown width={21} fill="#6B6B6B" />
      </div>
    </div>
  );
}

export default WebUtilButtonsUpgrade;
