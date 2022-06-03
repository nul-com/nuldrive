import styles from './WebLayoutsBaseUi.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseUiProps {}

export function WebLayoutsBaseUi(props: WebLayoutsBaseUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseUi!</h1>
    </div>
  );
}

export default WebLayoutsBaseUi;
