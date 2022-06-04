import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  return (
    <div className="h-header bg-white w-screen">
      <div className="">Hello world</div>
    </div>
  );
}

export default WebLayoutsBaseHeader;
