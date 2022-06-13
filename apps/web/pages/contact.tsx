import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';

export interface ContactProps {}

export function Contact(props: ContactProps) {
  return <div className=""></div>;
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Contact;
