import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './WebLayoutsLandingSectionsStatsCircle.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsStatsCircleProps {}

export function WebLayoutsLandingSectionsStatsCircle(
  props: WebLayoutsLandingSectionsStatsCircleProps
) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              Integrated workflow designed for product teams
            </h1>
            <p className="text-xl text-slate-300">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>

          <div className="grid md:grid-cols-3 bg-slate-750 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                <CountUp end={179} duration={3} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span>K</span>
              </div>
              <div
                className="text-lg text-slate-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Lorem ipsum is placeholder text commonly used.
              </div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                <CountUp end={147} duration={2.5} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span>%</span>
              </div>
              <div
                className="text-lg text-slate-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Lorem ipsum is placeholder text commonly used.
              </div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                <span>$</span>
                <CountUp end={97} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span>K</span>
              </div>
              <div
                className="text-lg text-slate-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Lorem ipsum is placeholder text commonly used.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsStatsCircle;
