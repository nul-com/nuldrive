import { ReactChild, useState } from 'react';
import { WebUtilTransition } from '@nuldrive/web/util/transition';
import Link from 'next/link';

import styles from './dropdown.module.css';

/* eslint-disable-next-line */
export interface DropdownProps {
  children: ReactChild;
  title: any;
}

export function Dropdown(props: DropdownProps) {
  const { children, title } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <Link href="#0" aria-expanded={dropdownOpen}>
        <div
          className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out font-bold cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          {title}
          <svg
            className="w-3 h-3 fill-current text-gray-500 ml-1 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
          </svg>
        </div>
      </Link>
      <WebUtilTransition
        show={dropdownOpen}
        tag="ul"
        className="origin-top-right absolute top-full right-0 w-40 bg-gray-900 py-2 ml-4 rounded-lg backdrop-blur-sm bg-opacity-90"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </WebUtilTransition>
    </li>
  );
}

export default Dropdown;
