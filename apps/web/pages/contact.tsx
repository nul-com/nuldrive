import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSupport } from 'libs/web/layouts/landing/sections/support/src';
import { WebLayoutsLandingSectionsSupportForm } from 'libs/web/layouts/landing/sections/support-form/src';

export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsSupport />
      <WebLayoutsLandingSectionsSupportForm />
    </main>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Contact;
