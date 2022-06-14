import { ReactChild, useState } from 'react';
import { WebUtilTransition } from '@nuldrive/web/util/transition';

import styles from './WebUtilTooltip.module.css';

/* eslint-disable-next-line */
export interface WebUtilTooltipProps {
  children?: ReactChild;
  className?: string;
  position?: 'right' | 'left' | 'bottom' | undefined;
}

export function WebUtilTooltip(props: WebUtilTooltipProps) {
  const { children, className, position } = props;

  const [tooltipOpen, setTooltipOpen] = useState<any>(false);

  const positionOuterClasses = (position: any) => {
    switch (position) {
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2';
    }
  };

  const positionInnerClasses = (position: any) => {
    switch (position) {
      case 'right':
        return 'ml-2';
      case 'left':
        return 'mr-2';
      case 'bottom':
        return 'mt-2';
      default:
        return 'mb-2';
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setTooltipOpen(true)}
      onMouseLeave={() => setTooltipOpen(false)}
      onFocus={() => setTooltipOpen(true)}
      onBlur={() => setTooltipOpen(false)}
    >
      <button
        className="block"
        aria-haspopup="true"
        aria-expanded={tooltipOpen}
        onClick={(e) => e.preventDefault()}
      >
        <svg
          className="w-3 h-3 fill-current text-slate-400 shrink-0"
          viewBox="0 0 17 17"
        >
          <path d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Zm0 14c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6ZM7 7h2v5H7V7Zm1-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
      </button>
      <div className={`z-10 absolute ${positionOuterClasses(position)}`}>
        <WebUtilTransition
          show={tooltipOpen}
          tag="div"
          className={`min-w-[12rem] bg-slate-800 p-2 rounded overflow-hidden ${positionInnerClasses(
            position
          )}`}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          {children}
        </WebUtilTransition>
      </div>
    </div>
  );
}

export default WebUtilTooltip;