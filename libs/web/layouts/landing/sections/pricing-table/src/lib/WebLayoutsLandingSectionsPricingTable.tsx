import { useState } from 'react';
import {
  WebUtilButtonsRangeSlider,
  calculateValue,
} from 'libs/web/util/buttons/range-slider/src';
import { WebUtilImageLoader } from '@nuldrive/web/util/imageLoader';

import styles from './WebLayoutsLandingSectionsPricingTable.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsPricingTableProps {}

export function WebLayoutsLandingSectionsPricingTable(
  props: WebLayoutsLandingSectionsPricingTableProps
) {
  const [pricingValue, setPricingValue] = useState<number>(10);
  const [toggleAnnual, setToggleAnnual] = useState<any>(false);

  const plan2: any = {
    64: 0.99,
    128: 1.99,
    256: 3.99,
    512: 9.99,
    1024: 19.99,
    2048: 29.99,
  };

  const plan2Cost = () => {
    const storage: any = 2 ** pricingValue / 1024;
    const price = plan2[storage];

    if (storage < Object.keys(plan2)[0]) return plan2[Object.keys(plan2)[0]];

    if (storage > Object.keys(plan2)[Object.keys(plan2).length - 1])
      return 'N/A';

    return price;
  };

  const priceOutput: any = {
    plan1: {
      false: ['$', 'Free', ''],
      true: ['$', 'Free', ''],
    },
    plan2: {
      false: ['$', `${plan2Cost()}`, '/mo'],
      true: [
        '$',
        `${plan2Cost() == 'N/A' ? 'N/A' : (plan2Cost() * 12).toFixed(2)}`,
        '/annual',
      ],
    },
    plan3: {
      false: [
        '$',
        `${((calculateValue(pricingValue) / 1000) * 0.03).toFixed(2)}`,
        '/mo',
      ],
      true: [
        '$',
        `${((calculateValue(pricingValue) / 1000) * 0.03 * 12).toFixed(2)}`,
        '/mo',
      ],
    },
  };

  return (
    <section className="relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Simple, transparent pricing
            </h1>
            <p
              className="text-xl text-slate-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get the Open PRO plan that fits your needs at a special
              introductory price.
            </p>
          </div>

          {/* Pricing tables */}
          <div>
            {/* Pricing toggle */}
            <div
              className=" grid md:flex justify-center mb-16 gap-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="inline-flex items-center">
                <div className="text-gray-500 font-medium mr-3">
                  Billed Monthly
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    name="pricing-toggle"
                    id="pricing-toggle"
                    className="sr-only"
                    checked={toggleAnnual}
                    onChange={() => setToggleAnnual(!toggleAnnual)}
                    onClick={() => console.log(pricingValue)}
                  />
                  <label className="bg-gray-600" htmlFor="pricing-toggle">
                    <span className="bg-gray-200" aria-hidden="true"></span>
                    <span className="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div className="text-gray-500 font-medium ml-3">
                  Billed Annually
                </div>
              </div>
              {/* Pricing Slider */}
              <div className="flex justify-center translate-y-4">
                <WebUtilButtonsRangeSlider setPricingValue={setPricingValue} />
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
              {/* Pricing table 1 */}
              <div
                className="relative flex flex-col h-full p-6 bg-slate-750 rounded-2xl"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
              >
                {pricingValue > 11 && (
                  <div className="absolute right-0 -top-8 w-40 h-40">
                    <WebUtilImageLoader
                      src="https://r2.eriascdn.com/hCwD5kgN.png"
                      width={160}
                      height={160}
                    />
                  </div>
                )}
                <div className="mb-4 pb-4 border-b border-slate-700">
                  <div className="h4 text-purple-600 mb-1">🦍 Starter</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-slate-300 pr-1">
                      {priceOutput.plan1[toggleAnnual][0]}
                    </span>
                    <span className="h2">
                      {priceOutput.plan1[toggleAnnual][1]}
                    </span>
                    <span className="font-medium text-slate-300">
                      {priceOutput.plan1[toggleAnnual][2]}
                    </span>
                  </div>
                  <p className="text-slate-300">
                    <span className="">Start with free</span>{' '}
                    <span className=" font-bold">2GB</span>{' '}
                    <span className="">to find your way of scaling with us. 🦍🚀🌕</span>
                  </p>
                </div>
                <div className="font-medium mb-3">Features include:</div>
                <ul className="text-slate-300 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>50 Placeholder text commonly</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li>
                </ul>
                <div className="border border-slate-700 p-3 mt-6">
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div
                className="relative flex flex-col h-full p-6 bg-slate-750 rounded-2xl"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  {pricingValue > 21 ? (
                    <div className="absolute right-0 -top-8 w-40 h-40">
                      <WebUtilImageLoader
                        src="https://r2.eriascdn.com/hCwD5kgN.png"
                        width={160}
                        height={160}
                      />
                    </div>
                  ) : (
                    <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">
                      Most Popular
                    </div>
                  )}
                </div>
                <div className="mb-4 pb-4 border-b border-slate-700">
                  <div className="h4 text-purple-600 mb-1">✨ Alter</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-slate-300">
                      {priceOutput.plan2[toggleAnnual][0]}
                    </span>
                    <span className="h2">
                      {priceOutput.plan2[toggleAnnual][1]}
                    </span>
                    <span className="font-medium text-slate-300">
                      {priceOutput.plan2[toggleAnnual][2]}
                    </span>
                  </div>
                  <div className="text-slate-300">
                    Get space in our heart um... storage drives to scale up. ⚡️
                  </div>
                </div>
                <div className="font-medium mb-3">
                  All features of Essential plus:
                </div>
                <ul className="text-slate-300 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>100 placeholder text commonly</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Placeholder text commonly used</span>
                  </li>
                </ul>
                <div className="border border-slate-700 p-3 mt-6">
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div
                className="relative flex flex-col h-full p-6 bg-slate-750 rounded-2xl"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="mb-4 pb-4 border-b border-slate-700">
                  <div className="h4 text-purple-600 mb-1">🚀 Fleet</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-slate-300">
                      {priceOutput.plan3[toggleAnnual][0]}
                    </span>
                    <span className="h2">
                      {priceOutput.plan3[toggleAnnual][1]}
                    </span>
                    <span className="font-medium text-slate-300">
                      {priceOutput.plan3[toggleAnnual][2]}
                    </span>
                  </div>
                  <div className="text-slate-300">
                    Pay. Exactly. What. You. Store. 🎉 <br /> As easy as clicking the button below. 
                  </div>
                </div>
                <div className="font-medium mb-3">
                  All features of Essential plus:
                </div>
                <ul className="text-slate-300 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>200 placeholder text commonly</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Voluptate velit esse cillum</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Placeholder text commonly used</span>
                  </li>
                </ul>
                <div className="border border-slate-700 p-3 mt-6">
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom infobox */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-slate-700">
              <div className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">
                Expecting more than 1000 Active End Users?
              </div>
              <div>
                <a
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                  href="#0"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsPricingTable;
