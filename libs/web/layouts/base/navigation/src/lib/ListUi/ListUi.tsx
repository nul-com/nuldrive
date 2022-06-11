import { useRouter } from 'next/router';
import { useState, useRef, useCallback, useEffect } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { ListItem } from '@nuldrive/web/layouts/base/navigation';
import Link from 'next/link';
import { Bolt, Folder, User, Times } from '@nuldrive/web/util/icons';

import styles from './list.module.css';

/* eslint-disable-next-line */
export interface ListUiProps {
  size?: any;
}

const menuItems = [
  {
    id: 0,
    href: '/quick',
    name: 'Quick',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 1,
    href: '/about',
    name: 'Collections',
    icon: Folder({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 2,
    href: '/work',
    name: 'Photos',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 3,
    href: '/blog',
    name: 'Share',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 4,
    href: '/blog',
    name: 'Web',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 5,
    href: '/blog',
    name: 'APIs',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 6,
    href: '/blog',
    name: 'Environments',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 7,
    href: '/blog',
    name: 'Mock Servers',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 8,
    href: '/blog',
    name: 'Monitors',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 9,
    href: '/blog',
    name: 'Statistics',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 10,
    href: '/blog',
    name: 'Flows',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 11,
    href: '/blog',
    name: 'Quick Share',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 12,
    href: '/blog',
    name: 'Speed Test',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
  {
    id: 13,
    href: '/blog',
    name: 'History',
    icon: Bolt({ width: '17', fill: '#6B6B6B' }),
  },
];

function getActiveIndex(pathname: any) {
  return menuItems.findIndex((item) => item.href === pathname);
}

export function ListUi(props: ListUiProps) {
  const { size } = props;
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
      <ul className="grid grid-cols-3 gap-x-8 gap-y-4 text-black md:flex md:flex-col md:gap-0 md:items-center md:fill-[#6B6B6B] md:text-[#6B6B6B] md:w-full">
        {menuItems.map(({ href, name, id, icon }) => (
          <ListItem
            key={id}
            active={activeHoverIndex === id}
            onHoverStart={handleOnHoverStart(id)}
            onHoverEnd={handleOnHoverEnd}
            onClick={handleOnClicked}
          >
            <Link href={href}>
              <button
                className={`flex flex-col items-center justify-center ${
                  size < 3 ? 'list_sm' : 'list_md'
                }`}
              >
                <span className="z-20">{icon}</span>
                {size >= 3 && (
                  <p className="z-20 text-sm w-max md:text-[10px] text-[#6B6B6B]">
                    {name}
                  </p>
                )}
                <p className="z-20 text-sm w-max md:hidden">
                  {name}
                </p>
              </button>
            </Link>
          </ListItem>
        ))}
      </ul>
    </AnimateSharedLayout>
  );
}

export default ListUi;
