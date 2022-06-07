import styles from './ListItem.module.css';

/* eslint-disable-next-line */
export interface ListItemProps {}

export function ListItem(props: ListItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ListItem!</h1>
    </div>
  );
}

export default ListItem;
