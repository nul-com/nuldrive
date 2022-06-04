import styles from './cloud-times.module.css';

/* eslint-disable-next-line */
export interface CloudTimesProps {}

export function CloudTimes(props: CloudTimesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CloudTimes!</h1>
    </div>
  );
}

export default CloudTimes;
