import { WebUtilTooltip } from 'libs/web/util/tooltip/src';

import styles from './WebLayoutsLandingSectionsFeaturesTable.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsFeaturesTableProps {}

export function WebLayoutsLandingSectionsFeaturesTable(
  props: WebLayoutsLandingSectionsFeaturesTableProps
) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 md:pt-6">
          {/* Section header */}
          <div className="pb-12">
            <h2 data-aos="fade-up" className="h2">
              Features
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table
              className="table-auto w-full border-b border-slate-600"
              data-aos="fade-up"
            >
              {/* Table header */}
              <thead
                data-aos="fade"
                data-aos-delay="200"
                data-aos-once="true"
                className=""
              >
                <tr className="text-base sm:text-lg border-t border-slate-600 hover:bg-slate-750 transition-all duration-500">
                  <th className="text-bold text-left px-2 py-4 min-w-48">
                    Breakdown of features
                  </th>
                  <th className="text-bold text-center px-2 py-4">
                    <p className="">Starter</p>
                    <p className="text-sm">$49</p>
                  </th>
                  <th className="text-bold text-center px-2 py-4">
                    {' '}
                    <p className="">Premium</p> <p className="text-sm">$79</p>
                  </th>
                  <th className="text-bold text-center px-2 py-4">
                    {' '}
                    <p className="">Agency</p> <p className="text-sm">$129</p>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 hover:bg-slate-750 transition-all duration-500"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Unlimited viewers</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 bg-slate-900 hover:bg-slate-750 transition-all duration-300"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Team members</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Excepteur sint occaecat cupidatat non proident
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    3
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Unlimited
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Unlimited
                  </td>
                </tr>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 bg-slate-900 hover:bg-slate-750 transition-all duration-300"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Projects</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Culpa qui officia deserunt mollit anim
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    3
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    20
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    50
                  </td>
                </tr>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 bg-slate-900 hover:bg-slate-750 transition-all duration-300"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Dedicated Support</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Excepteur sint occaecat cupidatat non proident
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 bg-slate-900 hover:bg-slate-750 transition-all duration-300"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Private projects</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-slate-300 opacity-75 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 bg-slate-900 hover:bg-slate-750 transition-all duration-300"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Public repositories</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Ut enim ad minim veniam quis nostrud exercitation ullamco
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-slate-300 opacity-75 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-slate-300 opacity-75 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr
                  data-aos="fade"
                  data-aos-once="true"
                  className="border-t border-slate-600 bg-slate-900 hover:bg-slate-750 transition-all duration-300"
                >
                  <td className="text-sm sm:text-base px-2 py-4">
                    <div className="flex items-center gap-2 font-medium underline">
                      <p className="">Account manager</p>
                      <WebUtilTooltip position="right">
                        <div className="text-xs text-slate-100">
                          Keep team shipping simple and take control of your
                          company.
                        </div>
                      </WebUtilTooltip>
                    </div>
                    <div className="text-slate-300">
                      Condimentum id venenatis a condimentum vitae
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-slate-300 opacity-75 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-slate-300 opacity-75 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    <svg
                      className="w-3 h-3 fill-current text-slate-300 opacity-75 inline-flex"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsFeaturesTable;
