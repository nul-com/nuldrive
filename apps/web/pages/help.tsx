import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';

export interface HelpProps {}

export function Help(props: HelpProps) {
  return <main className="grow"></main>;
}

Help.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Help;
