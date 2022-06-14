import { useState } from 'react';
import Link from 'next/link';
import { WebLayoutsLandingSectionsDocumentationContent } from '@nuldrive/web/layouts/landing/sections/documentation-content';

import styles from './WebLayoutsLandingSectionsDocumentation.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsDocumentationProps {}

export function WebLayoutsLandingSectionsDocumentation(
  props: WebLayoutsLandingSectionsDocumentationProps
) {
  const [sidebarNavOpen, setSidebarNavOpen] = useState(false);
  const [sidebarLinkOpen, setSidebarLinkOpen] = useState(true);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Main content */}
          <div className="md:flex md:justify-between sticky top-0" data-sticky-container>
            {/* Sidebar */}
            <aside className="relative my-12 md:my-0 md:w-64 md:mr-12 lg:mr-20 md:shrink-0">
              <div
                data-sticky
                data-margin-top="100"
                data-sticky-for="768"
                data-sticky-wrap
              >
                {/* Search form */}
                <form className="mb-4 pb-4 border-b border-gray-700">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <label className="block text-sm sr-only" htmlFor="search">
                        Search
                      </label>
                      <div className="relative flex items-center">
                        <div className="border border-gray-700 rounded">
                          <input
                            id="search"
                            type="search"
                            className="form-input w-full text-gray-300 px-3 py-2 pl-10"
                            placeholder="Search the docs"
                          />
                        </div>
                        <button
                          type="submit"
                          className="absolute inset-0 right-auto"
                          aria-label="Search"
                        >
                          <svg
                            className="w-4 h-4 fill-current text-gray-400 mx-3 shrink-0"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <button
                  className="flex items-center justify-between text-lg font-medium text-gray-900 w-full my-4 md:hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    setSidebarNavOpen(!sidebarNavOpen);
                  }}
                >
                  <span>Docs navigation</span>
                  <svg
                    className="w-3 h-3 fill-current text-blue-600 shrink-0 ml-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        sidebarNavOpen && 'rotate-180'
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        sidebarNavOpen && 'rotate-180'
                      }`}
                    />
                  </svg>
                </button>

                {/* Docs nav */}
                <nav className={`md:block ${!sidebarNavOpen && 'hidden'}`}>
                  <ul className="font-medium -my-2">
                    {/* 1st level */}
                    <li className="py-2">
                      <div
                        className="flex items-center hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setSidebarLinkOpen(!sidebarLinkOpen);
                        }}
                      >
                        <Link href="#0" aria-expanded={sidebarLinkOpen}>
                          <>
                            <div className="flex items-center grow cursor-pointer">
                              <svg
                                className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7 3.294L1.4 1.035C1.1.847.7.941.4 1.13c-.2.189-.4.471-.4.753v10.353c0 .377.2.753.6.847L7 15.718V3.294zM15.6 1.13c-.3-.189-.6-.189-.9-.095L9 3.295v12.423l6.4-2.542c.4-.188.6-.47.6-.847V1.882c0-.282-.2-.564-.4-.753z" />
                              </svg>
                              <span>Introduction</span>
                            </div>
                            <svg
                              className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                            </svg>
                          </>
                        </Link>
                      </div>
                      {/* 2nd level */}
                      <ul
                        className={`font-normal -mb-1 mt-1 ${
                          !sidebarLinkOpen && 'hidden'
                        }`}
                      >
                        <div className="border-l border-gray-700 pl-5 ml-2">
                          <li className="py-1 text-gray-400 hover:underline">
                            <Link href="#installation">Installation</Link>
                          </li>
                          <li className="py-1 text-gray-400 hover:underline">
                            <Link href="#quick">Quick start</Link>
                          </li>
                          <li className="py-1 text-gray-400 hover:underline">
                            <Link href="#folder">Folder content</Link>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li className="py-2 flex items-center hover:underline">
                      <Link href="#introduction">
                        <div className="flex items-center grow cursor-pointer">
                          <svg
                            className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15 4H4c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1zM12 10H1c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1zM15 16H4c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1z" />
                          </svg>
                          <span>Components</span>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2 flex items-center hover:underline">
                      <Link href="#introduction">
                        <div className="flex items-center grow cursor-pointer">
                          <svg
                            className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 9H1a1 1 0 01-1-1V1a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1zM6 16H1a1 1 0 01-1-1v-3a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1zM15 6h-5a1 1 0 01-1-1V1a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1zM15 16h-5a1 1 0 01-1-1V9a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1z" />
                          </svg>
                          <span>Page layouts</span>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2 flex items-center hover:underline">
                      <Link href="#introduction">
                        <div className="flex items-center grow cursor-pointer">
                          <svg
                            className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.5 15.414l-2.5-3V1a1 1 0 011-1h3a1 1 0 011 1v11.414l-2.5 3zM7 0H1C.4 0 0 .4 0 1v2h3v2H0v2h3v2H0v2h3v2H0v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z" />
                          </svg>
                          <span>Resources</span>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2 flex items-center hover:underline">
                      <Link href="#introduction">
                        <div className="flex items-center grow cursor-pointer">
                          <svg
                            className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="4.5" cy="4.5" r="4.5" />
                            <circle cx="12" cy="13" r="3" />
                            <circle cx="14.5" cy="5.5" r="1.5" />
                          </svg>
                          <span>Extras</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Page container */}
            <WebLayoutsLandingSectionsDocumentationContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsDocumentation;
