import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingSectionsDocumentation } from '@nuldrive/web/layouts/landing/sections/documentation';

export interface DocsProps {}

export function Docs(props: DocsProps) {
  return (
    <main className="grow">
      <WebLayoutsLandingSectionsDocumentation />
    </main>
  );
}

Docs.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Docs;
