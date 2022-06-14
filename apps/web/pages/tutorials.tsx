import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsTutorialsList } from 'libs/web/layouts/landing/sections/tutorials-list/src';
import { WebLayoutsLandingSectionsTutorialsCta } from 'libs/web/layouts/landing/sections/tutorials-cta/src';

export interface TutorialsProps {}

export function Tutorials(props: TutorialsProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsTutorialsList />
      <WebLayoutsLandingSectionsTutorialsCta />
    </main>
  );
}

Tutorials.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Tutorials;
