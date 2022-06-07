import { useRouter } from 'next/router';
import { useState, useRef, useCallback, useEffect } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { ListItem } from '@nuldrive/web/layouts/base/navigation';
import Link from 'next/link';
import { Bolt, Folder, User, Times } from '@nuldrive/web/util/icons';

import styles from './list.module.css';

/* eslint-disable-next-line */
export interface ListUiProps {}

const menuItems = [
  {
    id: 0,
    href: '/quick',
    name: 'Quick',
    icon: Bolt({ width: '12', fill: '#6B6B6B' }),
  },
  {
    id: 1,
    href: '/about',
    name: 'About',
    icon: Bolt({ width: '12', fill: '#6B6B6B' }),
  },
  {
    id: 2,
    href: '/work',
    name: 'Work',
    icon: Bolt({ width: '12', fill: '#6B6B6B' }),
  },
  {
    id: 3,
    href: '/blog',
    name: 'Blog',
    icon: Bolt({ width: '12', fill: '#6B6B6B' }),
  },
];

function getActiveIndex(pathname: any) {
  return menuItems.findIndex((item) => item.href === pathname);
}

export function ListUi(props: ListUiProps) {
  const { route } = useRouter();
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(() =>
    getActiveIndex(route)
  );
  const isClicked = useRef<boolean>(false);
  const isHover = useRef<boolean>(false);

  const handleOnClicked = () => {
    isClicked.current = true;
  };

  const handleOnHoverStart = useCallback(
    (id) => () => {
      isHover.current = true;
      setActiveHoverIndex(id);
    },
    []
  );

  function handleOnHoverEnd() {
    if (isClicked.current) {
      return;
    }
    const id = getActiveIndex(route);

    if (id < 0) {
      setTimeout(() => {
        if (isHover.current) return;
        setActiveHoverIndex(id);
      }, 500);
    } else {
      setActiveHoverIndex(id);
    }

    isHover.current = false;
  }

  useEffect(() => {
    isClicked.current = false;
    setActiveHoverIndex(getActiveIndex(route));
  }, [route]);

  return (
    <AnimateSharedLayout>
      <ul className="grid grid-cols-3 text-black md:flex md:flex-col  md:fill-[#6B6B6B] md:text-[#6B6B6B] md:w-full">
        {menuItems.map(({ href, name, id, icon }) => (
          <ListItem
            key={id}
            active={activeHoverIndex === id}
            onHoverStart={handleOnHoverStart(id)}
            onHoverEnd={handleOnHoverEnd}
            onClick={handleOnClicked}
          >
            <Link href={href}>
              <div className="realtive items-center justify-center text-sm font-medium cursor-pointer py-4">
                <div className="flex flex-col items-center justify-center z-20">
                  <span className=" z-20">{icon}</span>
                  <p className="md:text-[10px] z-20">{name}</p>
                </div>
              </div>
              {/* <p className="relative z-20 cursor-pointer px-4 lg:px-6">
                <div className="w-6 h-6 fill-black">{icon}</div>
                {name}
              </p> */}
            </Link>
          </ListItem>
        ))}
      </ul>
    </AnimateSharedLayout>
  );
}

export default ListUi;
