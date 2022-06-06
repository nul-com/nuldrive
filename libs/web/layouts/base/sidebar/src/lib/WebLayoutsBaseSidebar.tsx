import styles from './WebLayoutsBaseSidebar.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseSidebarProps {}

export function WebLayoutsBaseSidebar(props: WebLayoutsBaseSidebarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseSidebar!</h1>
    </div>
  );
}

export default WebLayoutsBaseSidebar;
