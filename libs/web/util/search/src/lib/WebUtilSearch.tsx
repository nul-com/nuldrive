import styles from './WebUtilSearch.module.css';

/* eslint-disable-next-line */
export interface WebUtilSearchProps {}

export function WebUtilSearch(props: WebUtilSearchProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilSearch!</h1>
    </div>
  );
}

export default WebUtilSearch;
