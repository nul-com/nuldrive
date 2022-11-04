import Link from 'next/link';
import { WebUtilImageLoader } from '@nuldrive/web/util/imageLoader';

import styles from './WebLayoutsLandingSectionsTutorialsList.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsTutorialsListProps {}

export function WebLayoutsLandingSectionsTutorialsList(
  props: WebLayoutsLandingSectionsTutorialsListProps
) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div
            data-aos="fade-up"
            className="max-w-3xl pb-12 md:pb-20 text-center md:text-left"
          >
            <h1 className="h1">
              Tutorials & guides for using Simple with any project
            </h1>
          </div>

          {/* Section tags */}
          <div
            className="border-b border-slate-700 pb-4 mb-12"
            data-aos="fade-in"
            data-aos-delay="50"
          >
            <ul className="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
              <li className="mx-5 my-1 cursor-pointer" data-aos="fade">
                <Link href="#0">
                  <p className="text-blue-600">All</p>
                </Link>
              </li>
              <li
                className="mx-5 my-1 cursor-pointer"
                data-aos="fade"
                data-aos-delay="50"
              >
                <Link href="#0">
                  <p className="text-slate-300 hover:underline">Tutorials</p>
                </Link>
              </li>
              <li
                className="mx-5 my-1 cursor-pointer"
                data-aos="fade"
                data-aos-delay="100"
              >
                <Link href="#0">
                  <p className="text-slate-300 hover:underline">
                    Tips & Tricks
                  </p>
                </Link>
              </li>
              <li
                className="mx-5 my-1 cursor-pointer"
                data-aos="fade"
                data-aos-delay="150"
              >
                <Link href="#0">
                  <p className="text-slate-300 hover:underline">Free ebooks</p>
                </Link>
              </li>
              <li
                className="mx-5 my-1 cursor-pointer"
                data-aos="fade"
                data-aos-delay="200"
              >
                <Link href="#0">
                  <p className="text-slate-300 hover:underline">Guides</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            {/* Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {/* 1st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 2nd article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 3rd article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="400"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 4st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 5st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 6st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="400"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 7st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 8st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 9st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="400"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 10st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 11st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>

              {/* 12st article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="400"
              >
                <header>
                  <Link href="/blog-post">
                    <div className="block mb-6">
                      <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/tutorial-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                            Guides
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <Link href="#0">
                          <p className="inline-flex text-center text-slate-100 py-1 px-3 rounded-full bg-slate-500 hover:bg-blue-200 transition duration-150 ease-in-out">
                            Intermediate
                          </p>
                        </Link>
                      </li>
                      <li className="m-1 cursor-pointer">
                        <span className="inline-flex text-center text-slate-700 py-1 px-3 rounded-full bg-slate-300 shadow-sm">
                          4 min read
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2 cursor-pointer">
                    <Link href="/blog-post">
                      <p className="hover:underline">
                        Making component design decisions in React
                      </p>
                    </Link>
                  </h3>
                </header>
                <p className="text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <Link href="#0">
                      <div className="relative">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-01.jpg"
                          width="32"
                          height="32"
                          alt="Author 01"
                        />
                      </div>
                    </Link>
                    <Link href="#0">
                      <div className="relative -ml-2">
                        <span className="absolute inset-0 " aria-hidden="true">
                          <span className="absolute inset-0 rounded-full"></span>
                        </span>
                        <WebUtilImageLoader
                          className="relative rounded-full"
                          src="https://r2.eriascdn.com/news-author-03.jpg"
                          width="32"
                          height="32"
                          alt="Author 03"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-slate-400">By </span>
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Lisa Allison
                      </span>
                    </Link>{' '}
                    &{' '}
                    <Link href="#0">
                      <span className="font-medium hover:underline text-gray-300 cursor-pointer">
                        Justin Park
                      </span>
                    </Link>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsTutorialsList;
