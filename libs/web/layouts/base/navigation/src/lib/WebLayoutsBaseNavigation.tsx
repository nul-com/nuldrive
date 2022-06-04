import styles from './WebLayoutsBaseNavigation.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseNavigationProps {}

export function WebLayoutsBaseNavigation(props: WebLayoutsBaseNavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseNavigation!</h1>
    </div>
  );
}

export default WebLayoutsBaseNavigation;
