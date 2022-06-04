import styles from './cloud-upload.module.css';

/* eslint-disable-next-line */
export interface CloudUploadProps {}

export function CloudUpload(props: CloudUploadProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CloudUpload!</h1>
    </div>
  );
}

export default CloudUpload;
