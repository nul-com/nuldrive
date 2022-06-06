import styles from './WebLayoutsBaseFooter.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseFooterProps {}

export function WebLayoutsBaseFooter(props: WebLayoutsBaseFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseFooter!</h1>
    </div>
  );
}

export default WebLayoutsBaseFooter;
