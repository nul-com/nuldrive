import styles from './WebLayoutsLandingList.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingListProps {}

export function WebLayoutsLandingList(props: WebLayoutsLandingListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsLandingList!</h1>
    </div>
  );
}

export default WebLayoutsLandingList;
