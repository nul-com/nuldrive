import styles from './illustration-red.module.css';

/* eslint-disable-next-line */
export interface IllustrationRedProps {}

export function IllustrationRed(props: IllustrationRedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IllustrationRed!</h1>
    </div>
  );
}

export default IllustrationRed;
