import styles from './WebLayoutsLandingUi.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingUiProps {}

export function WebLayoutsLandingUi(props: WebLayoutsLandingUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsLandingUi!</h1>
    </div>
  );
}

export default WebLayoutsLandingUi;
