import Image from 'next/image';
import {
  WebUtilImageLoaderProps,
  WebUtilImageLoader,
} from 'libs/web/util/imageLoader/src';

import styles from './WebUtilAvatar.module.css';

/* eslint-disable-next-line */
export interface WebUtilAvatarProps extends WebUtilImageLoaderProps {}

export function WebUtilAvatar(props: WebUtilAvatarProps) {
  return (
    <div className={`h-[${props.width}px]`}>
      <WebUtilImageLoader {...props} />
    </div>
  );
}

export default WebUtilAvatar;
