import styles from './WebLayoutsLandingHero.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingHeroProps {}

export function WebLayoutsLandingHero(props: WebLayoutsLandingHeroProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebLayoutsLandingHero!</h1>
    </div>
  );
}

export default WebLayoutsLandingHero;
