import styles from './ListUi.module.css';

/* eslint-disable-next-line */
export interface ListUiProps {}

export function ListUi(props: ListUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ListUi!</h1>
    </div>
  );
}

export default ListUi;
