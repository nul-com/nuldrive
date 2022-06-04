import styles from './logo.module.css';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Logo!</h1>
    </div>
  );
}

export default Logo;
