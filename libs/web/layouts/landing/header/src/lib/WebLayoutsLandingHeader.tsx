import styles from './WebLayoutsLandingHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingHeaderProps {}

export function WebLayoutsLandingHeader(props: WebLayoutsLandingHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsLandingHeader!</h1>
    </div>
  );
}

export default WebLayoutsLandingHeader;
