import styles from './ListHover.module.css';

/* eslint-disable-next-line */
export interface ListHoverProps {}

export function ListHover(props: ListHoverProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ListHover!</h1>
    </div>
  );
}

export default ListHover;
