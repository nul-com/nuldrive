import Link from 'next/link';

import styles from './WebLayoutsLandingSectionsCtaAlternative.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsCtaAlternativeProps {}

export function WebLayoutsLandingSectionsCtaAlternative(
  props: WebLayoutsLandingSectionsCtaAlternativeProps
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
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h3 text-white">
                  Sounds like we are building something cool?
                </h3>
              </div>

              {/* CTA button */}
              <Link href="/signup">
                <div className="btn text-purple-600 bg-purple-100 hover:bg-white cursor-pointer">
                  Join us today
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsCtaAlternative;
