import { useState } from 'react';
import Link from 'next/link';

import styles from './WebLayoutsLandingSectionsCaseStudies.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsCaseStudiesProps {}

export function WebLayoutsLandingSectionsCaseStudies(
  props: WebLayoutsLandingSectionsCaseStudiesProps
) {
  const [tab, setTab] = useState(1);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 ">
            <h2 className="h2 mb-4">
              Integrated workflow designed for product teams
            </h2>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
          <div
            className="flex flex-wrap justify-center -m-2"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="[data-aos-id-tabs]"
          >
            <button
              className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                tab !== 1 && 'opacity-50'
              }`}
              onClick={() => setTab(1)}
            >
              <svg
                className="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                Quick action
              </span>
            </button>
            <button
              className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                tab !== 2 && 'opacity-50'
              }`}
              onClick={() => setTab(2)}
            >
              <svg
                className="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                Quick action
              </span>
            </button>
            <button
              className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                tab !== 3 && 'opacity-50'
              }`}
              onClick={() => setTab(3)}
            >
              <svg
                className="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                Quick action
              </span>
            </button>
            <button
              className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                tab !== 4 && 'opacity-50'
              }`}
              onClick={() => setTab(4)}
            >
              <svg
                className="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                Quick action
              </span>
            </button>
            <button
              className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                tab !== 5 && 'opacity-50'
              }`}
              onClick={() => setTab(5)}
            >
              <svg
                className="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.936 6.007H8.358l1.594-4.685c.3-.997-.897-1.794-1.694-.997L.284 8.3c-.598.598-.199 1.694.698 1.694H7.56l-1.594 4.685c-.3.997.897 1.794 1.694.997L15.633 7.7c.598-.598.2-1.694-.697-1.694z" />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                Quick action
              </span>
            </button>
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto mt-16 md:max-w-none">
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">
              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <a className="block" href="#0">
                  <figure className="relative h-0 pb-9/16 overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://r2.eriascdn.com/news-10.jpg"
                      width="352"
                      height="198"
                      alt="News 10"
                    />
                    <Link href="/">
                      <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">
                        Case study
                      </figcaption>
                    </Link>
                  </figure>
                </a>
                <div className="grow flex flex-col h-full p-6 bg-gray-800">
                  <h3 className="h4 mb-2">
                    <a
                      className="hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      How to build anything
                    </a>
                  </h3>
                  <p className="text-lg text-gray-400 grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex.
                  </p>
                  <div>
                    <a
                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* 2nd article */}
              <article
                className="flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a className="block" href="#0">
                  <figure className="relative h-0 pb-9/16 overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://r2.eriascdn.com/news-11.jpg"
                      width="352"
                      height="198"
                      alt="News 11"
                    />
                    <Link href="/">
                      <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">
                        Case study
                      </figcaption>
                    </Link>
                  </figure>
                </a>
                <div className="grow flex flex-col h-full p-6 bg-gray-800">
                  <h3 className="h4 mb-2">
                    <a
                      className="hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      How to build anything
                    </a>
                  </h3>
                  <p className="text-lg text-gray-400 grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex.
                  </p>
                  <div>
                    <a
                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* 3rd article */}
              <article
                className="flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a className="block" href="#0">
                  <figure className="relative h-0 pb-9/16 overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://r2.eriascdn.com/news-12.jpg"
                      width="352"
                      height="198"
                      alt="News 12"
                    />
                    <Link href="/">
                      <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">
                        Case study
                      </figcaption>
                    </Link>
                  </figure>
                </a>
                <div className="grow flex flex-col h-full p-6 bg-gray-800">
                  <h3 className="h4 mb-2">
                    <a
                      className="hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      How to build anything
                    </a>
                  </h3>
                  <p className="text-lg text-gray-400 grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex.
                  </p>
                  <div>
                    <a
                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsCaseStudies;