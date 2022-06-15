import styles from './WebLayoutsLandingSectionsAboutStory.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsAboutStoryProps {}

export function WebLayoutsLandingSectionsAboutStory(
  props: WebLayoutsLandingSectionsAboutStoryProps
) {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our story</h3>
            <p className="text-lg text-slate-300 mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
              dictum varius duis at consectetur lorem donec massa sapien, sed
              risus ultricies tristique nulla aliquet. Morbi tristique senectus
              et netus et, nibh nisl condimentum id venenatis a condimentum
              vitae sapien.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Quam pellentesque nec nam aliquam sem et tortor consequat,
              pellentesque adipiscing commodo elit at imperdiet. Semper auctor
              neque vitae tempus quam pellentesque nec. Amet dictum sit amet
              justo donec enim diam varius sit amet mattis vulputate enim nulla
              aliquet porttitor.
            </p>
          </div>

          <div className="sm:flex">
            <figure
              data-aos="fade-right"
              className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0"
            >
              <img
                className="grow self-start rounded"
                src="https://r2.eriascdn.com/hero-image-02.png"
                width="435"
                height="326"
                alt="About us 02"
              />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 data-aos="fade-left" className="h4 mb-2">
                2017 - 2020
              </h4>
              <p data-aos="fade-left" className="text-lg text-slate-300 mb-8">
                Quam pellentesque nec nam aliquam sem et tortor consequat,
                pellentesque adipiscing commodo elit at imperdiet. Semper auctor
                neque vitae tempus quam pellentesque nec. Amet dictum sit amet
                justo donec enim diam varius sit amet mattis vulputate enim
                nulla aliquet porttitor.
              </p>
              <div data-aos="fade-left" className="flex  mb-8">
                <img
                  className="rounded-full self-start shrink-0 shadow-lg mr-4"
                  src="https://r2.eriascdn.com/about-logo.png"
                  width="40"
                  height="40"
                  alt="Logo"
                />
                <div>
                  <blockquote className="text-slate-300 italic">
                    “ I love this product and would recommend it to anyone.
                    Could be not easier to use, and our multiple websites are
                    wonderful. We get nice comments all the time. “
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-slate-300 not-italic">
                      Micheal Osman
                    </cite>{' '}
                    ·{' '}
                    <a className="text-blue-600" href="#0">
                      New York Times
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-300">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
              dictum varius duis at consectetur lorem donec massa sapien, sed
              risus ultricies tristique nulla aliquet. Morbi tristique senectus
              et netus et, nibh nisl condimentum id venenatis a condimentum
              vitae sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsAboutStory;
