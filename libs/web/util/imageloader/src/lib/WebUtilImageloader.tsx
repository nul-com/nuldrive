import Image from 'next/image';

import styles from './WebUtilImageloader.module.css';

/* eslint-disable-next-line */
export interface WebUtilImageLoaderProps {
  src: string;
  width: number;
  height?: number;
  quality?: string;
  alt?: string;
}

interface IimageLoader {
  src: string | undefined;
  width: number | undefined;
  quality?: number | undefined;
}

const imageLoader = (props: IimageLoader) => {
  const { src, width, quality } = props;
  return `${src}?w=${width}&q=${quality || 75}`;
};

export function WebUtilImageLoader(props: WebUtilImageLoaderProps) {
  const { src, width, height, quality, alt } = props;
  return (
    <Image
      loader={imageLoader}
      src={src}
      className=""
      quality={quality}
      alt={alt || 'user'}
      width={width}
      height={height || width}
    />
  );
}

export default WebUtilImageLoader;
