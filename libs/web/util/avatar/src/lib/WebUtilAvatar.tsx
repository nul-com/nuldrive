import styles from './WebUtilAvatar.module.css';

/* eslint-disable-next-line */
export interface WebUtilAvatarProps {}

export function WebUtilAvatar(props: WebUtilAvatarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilAvatar!</h1>
    </div>
  );
}

export default WebUtilAvatar;
