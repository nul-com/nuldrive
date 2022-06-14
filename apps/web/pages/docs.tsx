import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';

export interface DocsProps {}

export function Docs(props: DocsProps) {
  return <main className="grow"></main>;
}

Docs.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Docs;
