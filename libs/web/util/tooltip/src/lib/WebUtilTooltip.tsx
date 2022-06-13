import styles from './WebUtilTooltip.module.css';

/* eslint-disable-next-line */
export interface WebUtilTooltipProps {}

export function WebUtilTooltip(props: WebUtilTooltipProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilTooltip!</h1>
    </div>
  );
}

export default WebUtilTooltip;
