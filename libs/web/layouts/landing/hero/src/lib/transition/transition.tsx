import styles from './transition.module.css';

/* eslint-disable-next-line */
export interface TransitionProps {}

export function Transition(props: TransitionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Transition!</h1>
    </div>
  );
}

export default Transition;
