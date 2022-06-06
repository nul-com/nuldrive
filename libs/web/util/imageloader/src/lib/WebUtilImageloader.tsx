import styles from './WebUtilImageloader.module.css';

/* eslint-disable-next-line */
export interface WebUtilImageloaderProps {}

export function WebUtilImageloader(props: WebUtilImageloaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilImageloader!</h1>
    </div>
  );
}

export default WebUtilImageloader;
