import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsHeroFeatures } from '@nuldrive/web/layouts/landing/sections/hero-features';
import { WebLayoutsLandingSectionsStatsCircle } from '@nuldrive/web/layouts/landing/sections/stats-circle';
import { WebLayoutsLandingSectionsFeaturesZigzag } from '@nuldrive/web/layouts/landing/sections/features-zigzag';

export interface FeaturesProps {}
export function Features(props: FeaturesProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsHeroFeatures />
          <WebLayoutsLandingSectionsStatsCircle />
          <WebLayoutsLandingSectionsFeaturesZigzag />
    </main>
  );
}

Features.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Features;
