import styles from './WebUtilSync.module.css';

/* eslint-disable-next-line */
export interface WebUtilSyncProps {}

export function WebUtilSync(props: WebUtilSyncProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilSync!</h1>
    </div>
  );
}

export default WebUtilSync;
