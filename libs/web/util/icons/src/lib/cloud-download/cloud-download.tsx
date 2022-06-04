import styles from './cloud-download.module.css';

/* eslint-disable-next-line */
export interface CloudDownloadProps {}

export function CloudDownload(props: CloudDownloadProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CloudDownload!</h1>
    </div>
  );
}

export default CloudDownload;
