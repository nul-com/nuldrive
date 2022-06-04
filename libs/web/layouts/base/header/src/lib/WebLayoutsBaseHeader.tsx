import styles from './WebLayoutsBaseHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseHeaderProps {}

export function WebLayoutsBaseHeader(props: WebLayoutsBaseHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseHeader!</h1>
    </div>
  );
}

export default WebLayoutsBaseHeader;
