import styles from './cloud-check.module.css';

/* eslint-disable-next-line */
export interface CloudCheckProps {}

export function CloudCheck(props: CloudCheckProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CloudCheck!</h1>
    </div>
  );
}

export default CloudCheck;
