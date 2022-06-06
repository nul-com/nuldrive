import styles from './WebLayoutsBaseTabs.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseTabsProps {}

export function WebLayoutsBaseTabs(props: WebLayoutsBaseTabsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseTabs!</h1>
    </div>
  );
}

export default WebLayoutsBaseTabs;
