import Link from 'next/link';

import styles from './WebLayoutsLandingSectionsSignIn.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsSignInProps {}

export function WebLayoutsLandingSectionsSignIn(
  props: WebLayoutsLandingSectionsSignInProps
) {
  return (
    <section className="relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-20 text-center cursor-default">
            <h1 aria-label="Log in" title="Log in" className="h1">
              Log in 🙂🔜🚪
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"
                    ></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Sign in with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-700 border-dotted grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-400">Or, sign in with your email</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="border border-gray-700 rounded-lg flex justify-between items-center pr-3">
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full text-gray-300"
                      placeholder="you@yourcompany.com"
                      required
                    />
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="border border-gray-700 rounded-lg">
                    <input
                      id="password"
                      type="password"
                      className="form-input w-full text-gray-300"
                      placeholder="Password (at least 10 characters)"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <div className="border relative rounded w-4 h-4 border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox -translate-y-[7px] -translate-x-[1px]"
                        />
                      </div>
                      <span className="text-gray-400 ml-2">
                        Keep me signed in
                      </span>
                    </label>
                    <Link href="/reset-password">
                      <p className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full h-[46px]">
                    {/* <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg> */}
                    <p className="pl-3">Continue</p>
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account?{' '}
              <Link href="/signup">
                <p className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  Sign up
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsSignIn;
