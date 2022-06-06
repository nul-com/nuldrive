import styles from './WebLayoutsBaseFooter.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseFooterProps {}

export function WebLayoutsBaseFooter(props: WebLayoutsBaseFooterProps) {
  return (
    <div className="text-sm h-footer border-t-[1px] border-borderColor flex items-center">
      <div className="">Hello World</div>
    </div>
  );
}

export default WebLayoutsBaseFooter;
