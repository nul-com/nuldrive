import styles from './WebLayoutsBaseSearch.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBaseSearchProps {}

export function WebLayoutsBaseSearch(props: WebLayoutsBaseSearchProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsBaseSearch!</h1>
    </div>
  );
}

export default WebLayoutsBaseSearch;
