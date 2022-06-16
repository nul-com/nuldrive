import { useState } from 'react';
import Link from 'next/link';
import { Typing } from 'react-typing';

import styles from './WebLayoutsLandingSectionsSignUp.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsSignUpProps {
  space: any;
}

export function WebLayoutsLandingSectionsSignUp(
  props: WebLayoutsLandingSectionsSignUpProps
) {
  let { space } = props;

  const [section, setSection] = useState<number>(0);
  const [showEmail, setShowEmail] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [signWithEmail, setSignWithEmail] = useState<boolean>(false);

    /*
   * Section 0: Trigger: Page Load / Show Typing into
   * Section 1: Trigger: Typing effect end / Show third-party buttons and email form
   * Section 2: Trigger: Input in email form / Continue button in email form triggers space travel animation
   * Section 3: Trigger: Continue button at email pressed / Show password form
   * Section 4: Trigger: Input in password form / Continue button in password form triggers space travel animation
   * Section 5: Trigger: Continue button at password pressed / Register user
   */

  return (
    <section className="relative z-20 h-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
        <div className="pt-32 md:pt-40 h-full flex justify-between flex-col">
          <div className="">
            <div className="bg-gray-800 max-w-[606px] border border-gray-650 rounded-lg overflow-hidden p-4 md:p-6 mx-auto">
              <p className="text-gray-700 font-mono font-medium">
                <Typing
                  keyDelay={30}
                  delay={1000}
                  onDone={(event: any) => {
                    setSection(1);
                  }}
                >
                  Welcome to nuldrive!
                  <br /> Let's begin the adventure
                </Typing>
              </p>

              {/* Third party Buttons */}
              {section >= 1 && (
                <div className="mt-2 flex justify-between">
                  <ul className="flex gap-2 items-center">
                    <li className="bg-slate-700 p-2 w-min rounded-lg cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-slate-100"
                      >
                        <path
                          fill="currentColor"
                          d="M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z"
                        />
                      </svg>
                    </li>
                    <li className="bg-slate-700 p-2 w-min rounded-lg cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-slate-100"
                      >
                        <path
                          fill="currentColor"
                          d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
                        />
                      </svg>
                    </li>
                    <li className="bg-slate-700 p-2 w-min rounded-lg cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-slate-100"
                      >
                        <path
                          fill="currentColor"
                          d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="h-full">
                      <div
                        className={`flex items-center border rounded-md px-3 h-full cursor-pointer ${
                          signWithEmail
                            ? 'border-green-400 text-green-400'
                            : 'border-[#637597] text-gray-300'
                        }`}
                        onClick={() => setSignWithEmail(!signWithEmail)}
                      >
                        <button className=" text-sm">Sign up with Email</button>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* Email input */}
              {section >= 1 && (
                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#00cfc8] font-mono font-semibold"
                  >
                    Enter your email
                  </label>
                  <div className="flex justify-between items-center">
                    <div className="flex h-min w-full pr-3 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="text-[#ea4aaa] w-6 h-6"
                      >
                        <path
                          fill="currentColor"
                          d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                        />
                      </svg>
                      <input
                        id="password"
                        type={showEmail ? 'email' : 'password'}
                        className="form-input pl-0 pt-0 pb-0 font-mono font-medium w-full text-slate-100"
                        placeholder=""
                        required
                        onInput={() => setSection(2)}
                      />
                    </div>
                    <div className="flex gap-3 items-center">
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowEmail(!showEmail)}
                      >
                        {showEmail ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-700"
                          >
                            <path
                              fill="currentColor"
                              d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-700"
                          >
                            <path
                              fill="currentColor"
                              d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className="group border border-[#637597] rounded-md px-3 py-1 cursor-pointer"
                        onMouseOver={() => section == 2 && (space.throttle = 1)}
                        onMouseLeave={() => (space.throttle = 0)}
                        onClick={() => {
                          space.throttle = 0;
                          section == 2 && setSection(3);
                        }}
                      >
                        <button className="text-gray-300 text-sm">
                          Continue
                        </button>
                      </span>
                    </div>
                  </div>
                  {section == 3 && signWithEmail && (
                    <div className="flex items-center gap-2 text-green-500 text-sm mt-2 ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        />
                      </svg>
                      <p className="">
                        Please check your e-mail inbox for an activation link
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Password input */}
              {section >= 3 && !signWithEmail && (
                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#00cfc8] font-mono font-semibold"
                  >
                    Create a password
                  </label>
                  <div className="flex justify-between items-center">
                    <div className="flex h-min w-full pr-3 items-center">
                      <button className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="text-[#ea4aaa] w-6 h-6"
                        >
                          <path
                            fill="currentColor"
                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                          />
                        </svg>
                      </button>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        className="form-input pl-0 pt-0 pb-0 font-mono font-medium w-full text-slate-100"
                        placeholder=""
                        required
                        onInput={() => setSection(4)}
                      />
                    </div>
                    <div className="flex gap-3 items-center">
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-700"
                          >
                            <path
                              fill="currentColor"
                              d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-700"
                          >
                            <path
                              fill="currentColor"
                              d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className="group border border-[#637597] rounded-md px-3 py-1"
                        onMouseOver={() => section == 4 && (space.throttle = 1)}
                        onMouseLeave={() => (space.throttle = 0)}
                        onClick={() => {
                          space.throttle = 0;
                          setSection(5);
                        }}
                      >
                        <button className="text-gray-300 text-sm">
                          Continue
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {section >= 4 && (
              <div className="max-w-[606px] mx-auto px-6 mt-10">
                <div className="w-full flex gap-3">
                  <div className="bg-[#627597] w-12 h-1 rounded-md bg-[#ed4e50]"></div>
                  <div className="bg-[#627597] w-12 h-1 rounded-md"></div>
                  <div className="bg-[#627597] w-12 h-1 rounded-md"></div>
                </div>
                <div className="mt-2.5">
                  <p className=" text-[#ed4e50]">Password is too short</p>
                </div>
                <div className="mt-1.5">
                  <p className="text-gray-700">
                    Make sure it's at least 15 characters OR at least 8
                    characters including a number and a lowercase letter.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-end max-w-[606px] mx-auto text-xs font-medium text-gray-700 text-center h-full pb-10">
            <div className="">
              <span className="">By creating an account, you agree to the</span>{' '}
              <Link href="/terms">
                <span className=" text-blue-600 cursor-pointer">
                  Terms of Service.
                </span>
              </Link>{' '}
              <span className="">
                For more information about nuldrive's privacy practices, see the
              </span>{' '}
              <Link href="/terms">
                <span className="text-blue-600 cursor-pointer">
                  nuldrive Privacy Statement.
                </span>
              </Link>{' '}
              <span className="">
                We'll occasionally send you account-related emails.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsSignUp;
