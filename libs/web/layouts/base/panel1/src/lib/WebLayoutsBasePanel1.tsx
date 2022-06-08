import { WebLayoutsBaseNavigation } from '@nuldrive/web/layouts/base/navigation';
import { WebUtilButtonsSearch } from '@nuldrive/web/util/buttons/search';
import { useEffect, useRef, useState } from 'react';

import styles from './WebLayoutsBasePanel1.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanel1Props {
  size: any;
}

export function WebLayoutsBasePanel1(props: WebLayoutsBasePanel1Props) {
  const { size } = props;
  const [searchCollapsed, setSearchCollapsed] = useState<boolean>(
    size < 250 ? true : false
  );
  let divRef = useRef<any>();

  const useContainerDimensions = (myRef: any) => {
    const getDimensions = () => ({
      width: myRef?.current?.clientWidth,
      height: myRef?.current?.clientHeight,
    });

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions());
      };

      if (myRef.current) {
        setDimensions(getDimensions());
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [myRef]);

    return dimensions;
  };
  const { width, height } = useContainerDimensions(divRef);
  console.log(width);

  return (
    <div
      className="hidden md:flex md:h-full"
      onClick={() => console.log(size)}
      ref={divRef}
    >
      <div className="">
        <WebLayoutsBaseNavigation />
      </div>
      <div className="h-[34px] w-full px-3 mt-[13px]">
        <WebUtilButtonsSearch />
      </div>
    </div>
  );
}

export default WebLayoutsBasePanel1;
