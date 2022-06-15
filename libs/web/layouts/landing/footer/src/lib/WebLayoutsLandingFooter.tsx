import Link from 'next/link';

import styles from './WebLayoutsLandingFooter.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingFooterProps {}

export function WebLayoutsLandingFooter(props: WebLayoutsLandingFooterProps) {
  return (
    <footer className="z-20">
      <div className="pt-12 md:pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-slate-700">
            {/* 1st block */}
            <div className="sm:col-span-12 lg:col-span-3">
              <div className="mb-2 inline-block">
                {/* Logo */}
                <Link href="/" aria-label="Cruip">
                  <svg
                    className="w-8 h-8 cursor-pointer"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="21.152%"
                        cy="86.063%"
                        fx="21.152%"
                        fy="86.063%"
                        r="79.941%"
                        id="footer-logo"
                      >
                        <stop stopColor="#4FD1C5" offset="0%" />
                        <stop stopColor="#81E6D9" offset="25.871%" />
                        <stop stopColor="#338CF5" offset="100%" />
                      </radialGradient>
                    </defs>
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="url(#footer-logo)"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
              <div className="text-sm text-slate-300">
                <span className="hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Terms</Link>
                  {' · '}
                </span>
                <span className=" hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Privacy Policy</Link>
                </span>
              </div>
            </div>

            {/* 2nd block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-200 font-medium mb-2">Products</h6>
              <ul className="text-sm">
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Web Studio</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">DynamicBox Flex</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Programming Forms</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Integrations</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Command-line</Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-200 font-medium mb-2">Resources</h6>
              <ul className="text-sm">
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Documentation</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Tutorials & Guides</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Blog</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Support Center</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Partners</Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-200 font-medium mb-2">Company</h6>
              <ul className="text-sm">
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Home</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">About us</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Company values</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Pricing</Link>
                </li>
                <li className="mb-2 text-slate-300 hover:text-gray-100 transition duration-150 ease-in-out">
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* 5th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <h6 className="text-gray-200 font-medium mb-2">Subscribe</h6>
              <p className="text-sm text-slate-300 mb-4">
                Get the latest news and articles to your inbox every month.
              </p>
              <form>
                <div className="flex flex-wrap mb-4 border-gray-400">
                  <div className="w-full">
                    <label
                      className="block text-sm sr-only"
                      htmlFor="newsletter"
                    >
                      Email
                    </label>
                    <div className="relative flex items-center max-w-xs">
                      <div className="border border-slate-700 rounded-xl">
                        <input
                          id="newsletter"
                          type="email"
                          className="form-input w-full text-gray-200 px-3 py-2 pr-12 text-sm"
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="absolute inset-0 left-auto"
                        aria-label="Subscribe"
                      >
                        <span
                          className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-700"
                          aria-hidden="true"
                        ></span>
                        <svg
                          className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Success message */}
                    {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-slate-700">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="flex justify-center items-center text-purple-600 bg-slate-700 hover:text-gray-100 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out cursor-pointer">
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4 flex justify-center items-center text-purple-600 bg-slate-700 hover:text-gray-100 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out cursor-pointer">
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4 flex justify-center items-center text-purple-600 bg-slate-700 hover:text-gray-100 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out cursor-pointer">
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4 flex justify-center items-center text-purple-600 bg-slate-700 hover:text-gray-100 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out cursor-pointer">
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4 flex justify-center items-center text-purple-600 bg-slate-700 hover:text-gray-100 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out cursor-pointer">
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-sm text-slate-300 mr-4">
              &copy; 2022 - {new Date().getFullYear()} nuldrive. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default WebLayoutsLandingFooter;
