import styles from './WebLayoutsLandingSectionsAboutIntro.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsAboutIntroProps {}

export function WebLayoutsLandingSectionsAboutIntro(
  props: WebLayoutsLandingSectionsAboutIntroProps
) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 data-aos="fade-up" className="h1 mb-4">
              We enable developers to build amazing things
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl text-gray-400"
            >
              We have transformed product development, making it faster,
              simpler... better! That's why in just three years we now help more
              developers build projects than anyone else.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <img
              className="rounded-xl shadow-2xl z-20"
              src="https://r2.eriascdn.com/hero-image-02.png"
              width="768"
              height="432"
              alt="About us"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsAboutIntro;
