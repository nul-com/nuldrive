import styles from './WebUtilEnvironment.module.css';

/* eslint-disable-next-line */
export interface WebUtilEnvironmentProps {}

export function WebUtilEnvironment(props: WebUtilEnvironmentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilEnvironment!</h1>
    </div>
  );
}

export default WebUtilEnvironment;
