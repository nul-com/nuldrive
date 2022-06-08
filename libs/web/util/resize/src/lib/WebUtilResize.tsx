import styles from './WebUtilResize.module.css';

/* eslint-disable-next-line */
export interface WebUtilResizeProps {}

export function WebUtilResize(props: WebUtilResizeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilResize!</h1>
    </div>
  );
}

export default WebUtilResize;
