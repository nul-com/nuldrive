import Link from 'next/link';

import styles from './WebLayoutsLandingSectionsPricingCta.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsPricingCtaProps {}

export function WebLayoutsLandingSectionsPricingCta(
  props: WebLayoutsLandingSectionsPricingCtaProps
) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-purple-600 rounded-2xl py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Ready to get started?</h3>
                <p className="text-gray-100 text-lg">
                  We have a generous free tier available to get you started
                  right away.
                </p>
              </div>

              {/* CTA button */}
              <Link href="#0">
                <div className="btn bg-gradient-to-r from-blue-100 to-white text-purple-600 bg-purple-100 hover:bg-white rounded-xl cursor-pointer">
                  Get started for free
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsPricingCta;
