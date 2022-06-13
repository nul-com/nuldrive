import { useState, useRef, useEffect, ReactChild } from 'react';

import styles from './WebUtilAccordion.module.css';

/* eslint-disable-next-line */
export interface WebUtilAccordionProps {
  children: ReactChild;
  tag?: string;
  title: any;
  active?: any;
}

export function WebUtilAccordion(props: WebUtilAccordionProps) {
  const { children, tag = 'li', title, active } = props;

  const [accordionOpen, setAccordionOpen] = useState<any>(false);
  const accordion = useRef<any>(null);
  const Component: any = tag;

  useEffect(() => {
    setAccordionOpen(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion]);

  return (
    <Component>
      <div className="border-t border-gray-700">
        <button
          className="flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-700"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
        >
          <svg
            className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-8 -ml-12"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && 'rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && 'rotate-180'
              }`}
            />
          </svg>
          <span>{title}</span>
        </button>
      </div>
      <div
        ref={accordion}
        className="text-gray-400 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          accordionOpen
            ? { maxHeight: accordion.current.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <p className="pb-5">{children}</p>
      </div>
    </Component>
  );
}

export default WebUtilAccordion;
