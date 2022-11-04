import Link from 'next/link';

import styles from './WebLayoutsLandingSectionsSupportForm.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsSupportFormProps {}

export function WebLayoutsLandingSectionsSupportForm(
  props: WebLayoutsLandingSectionsSupportFormProps
) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              How can we help you?
            </h1>
            <p
              className="text-xl text-slate-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We have custom plans to power your business. Tell us your needs,
              and we’ll contact you shortly.
            </p>
          </div>

          {/* Contact form */}
          <form className="max-w-xl mx-auto">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-300 text-sm font-medium mb-1"
                  htmlFor="first-name"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <div className="border border-slate-700 rounded-xl hover:border-slate-500 transition-all duration-300">
                  <input
                    id="first-name"
                    type="text"
                    className="form-input w-full text-gray-300 border-red-500 focus:border-red-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <p className="text-red-500 text-sm mt-2">
                  This field is required
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-300 text-sm font-medium mb-1"
                  htmlFor="last-name"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <div className="border border-slate-700 rounded-xl hover:border-slate-500 transition-all duration-300">
                  <input
                    id="last-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-300 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <div className="border border-slate-700 rounded-xl hover:border-slate-500 transition-all duration-300">
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-300 text-sm font-medium mb-1"
                  htmlFor="subject"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <div className="border border-slate-700 rounded-xl hover:border-slate-500 transition-all duration-300">
                  <input
                    id="subject"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-300 text-sm font-medium mb-1"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="form-select w-full text-gray-300 rounded-xl hover:border-slate-500 transition-all duration-300"
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-300 text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="form-textarea w-full text-gray-300 rounded-xl hover:border-slate-500 transition-all duration-300"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="flex items-center cursor-pointer">
                  <div className="border relative rounded w-4 h-4 border-slate-500 hover:border-slate-400 transition-all duration-300">
                    <input
                      type="checkbox"
                      className="form-checkbox -translate-y-[7px] -translate-x-[1px] cursor-pointer"
                    />
                  </div>
                  <span className="text-slate-300 ml-2">
                    I agree to the privacy policy
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                  Send
                </button>
              </div>
            </div>
            <div className="text-slate-300 mt-4">
              By clicking "send" you consent to allow Simple to store and
              process the personal information submitted above and agree to our{' '}
              <Link href="#0">
                <span className="underline">terms and conditions</span>
              </Link>{' '}
              as well as our{' '}
              <Link href="#0">
                <span className="underline">Privacy Policy</span>
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsSupportForm;
