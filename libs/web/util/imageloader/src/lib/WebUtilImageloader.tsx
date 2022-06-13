import Image from 'next/image';

import styles from './WebUtilImageloader.module.css';

/* eslint-disable-next-line */
export interface WebUtilImageLoaderProps {
  src: string;
  width?: number | string;
  height?: number | string;
  quality?: string;
  alt?: string;
  className?: string;
  style?: any;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;
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
  const { src, width, height, quality, alt, className, style, layout } = props;
  return (
    <Image
      loader={imageLoader}
      src={src}
      className={className}
      quality={quality}
      alt={alt ? alt : 'nuldrive'}
      width={width}
      height={height}
      layout={layout}
    />
  );
}

export default WebUtilImageLoader;
