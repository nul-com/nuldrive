import Link from 'next/link';
import { WebUtilImageLoader } from '@nuldrive/web/util/imageLoader';

import styles from './WebLayoutsLandingSectionsBlogList.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsBlogListProps {}

export function WebLayoutsLandingSectionsBlogList(
  props: WebLayoutsLandingSectionsBlogListProps
) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/*  Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1" data-aos="fade-up">
              Refreshing news for developers and designers
            </h1>
          </div>

          {/*  Featured article */}
          <div className="pb-12 md:pb-20">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="relative block group"
              >
                <Link href="/blog-post">
                  <>
                    <div
                      className="absolute inset-0 bg-slate-750 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                      aria-hidden="true"
                    ></div>
                    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <WebUtilImageLoader
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src="https://r2.eriascdn.com/blog-post-01.jpg"
                        width="540"
                        height="303"
                        alt="Blog post 01"
                      />
                    </figure>
                  </>
                </Link>
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="/">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      Designing a functional workflow at home.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <footer className="flex items-center mt-4">
                  <Link href="#">
                    <div className="">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0 mr-4"
                        src="https://r2.eriascdn.com/news-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 04"
                      />
                    </div>
                  </Link>
                  <div>
                    <span className="font-medium text-gray-200 hover:text-gray-100 transition ml-4 duration-150 ease-in-out">
                      <Link href="#">Chris Solerieu</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>

          {/*  Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            {/*  Section title */}
            <h4
              className="h4 border-b border-slate-700 w-full"
              data-aos="fade-up"
            >
              Latest articles
            </h4>
            <div className="pb-6 mb-10 border-b border-slate-700 w-full"></div>

            {/*  Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {/*  1st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  2nd article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  3rd article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  4st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  5st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  6st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  7st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  8st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  9st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <div className="block mb-6">
                    <Link href="/blog-post">
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <WebUtilImageLoader
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src="https://r2.eriascdn.com/news-01.jpg"
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        <Link href="#">Product</Link>
                      </li>
                      <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                        <Link href="#">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
                    <Link href="/blog-post">
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-slate-300 grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className="flex items-center gap-4 mt-4">
                  <Link href="#">
                    <div className="flex items-center">
                      <WebUtilImageLoader
                        className="rounded-full shrink-0"
                        src="https://r2.eriascdn.com/news-author-01.jpg"
                        width="40"
                        height="40"
                        alt="Author 01"
                      />
                    </div>
                  </Link>
                  <div className="font-medium">
                    <span className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                      <Link href="#">Anastasia Dan</Link>
                    </span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>
            </div>
          </div>

          {/*  Pagination */}
          <nav
            className="flex justify-center pt-16"
            role="navigation"
            aria-label="Pagination Navigation"
          >
            <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
              <li className="m-1">
                <span className="inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-4 rounded-full text-gray-500">
                  Prev
                </span>
              </li>
              <li className="m-1 inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">
                <Link href="#">1</Link>
              </li>
              <li className="m-1 inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">
                <Link href="#">2</Link>
              </li>
              <li className="m-1 inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">
                <Link href="#">3</Link>
              </li>
              <li className="m-1">
                <span className="inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-2 rounded-full text-gray-500">
                  ...
                </span>
              </li>
              <li className="m-1 inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">
                <Link href="#">12</Link>
              </li>
              <li className="m-1 inline-flex h-10 min-w-10 justify-center items-center bg-slate-750 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">
                <Link href="#">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsBlogList;
