import Image from 'next/image';
import {
  WebUtilImageLoaderProps,
  WebUtilImageLoader,
} from 'libs/web/util/imageLoader/src';

import styles from './WebUtilAvatar.module.css';

/* eslint-disable-next-line */
export interface WebUtilAvatarProps extends WebUtilImageLoaderProps {}

export function WebUtilAvatar(props: WebUtilAvatarProps, { ...rest }) {
  const { src, width, height } = props;
  return (
    <div className={`h-[${props.width}px]`}>
      <WebUtilImageLoader src={src} width={width} height={height} {...rest} />
    </div>
  );
}

export default WebUtilAvatar;
