import styles from './WebLayoutsBaseMenu.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseMenuProps {}

export function WebLayoutsBaseMenu(props: WebLayoutsBaseMenuProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseMenu!</h1>
    </div>
  );
}

export default WebLayoutsBaseMenu;
