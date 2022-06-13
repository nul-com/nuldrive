import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { IllustrationRed } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsPricingTable } from 'libs/web/layouts/landing/sections/pricing-table/src';
import { WebLayoutsLandingSectionsFeaturesTable } from 'libs/web/layouts/landing/sections/features-table/src';
import { WebLayoutsLandingSectionsPricingCarousel } from 'libs/web/layouts/landing/sections/pricing-carousel/src';
import { WebLayoutsLandingSectionsFaq } from 'libs/web/layouts/landing/sections/faq/src';
import { WebLayoutsLandingSectionsAwesomeCta } from 'libs/web/layouts/landing/sections/awesome-cta/src';

export interface PricingProps {}

export function Pricing(props: PricingProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <IllustrationRed />
      </div>
      <WebLayoutsLandingSectionsPricingTable />
      <WebLayoutsLandingSectionsFeaturesTable />
      <WebLayoutsLandingSectionsPricingCarousel />
      <WebLayoutsLandingSectionsFaq />
      <WebLayoutsLandingSectionsAwesomeCta />
    </main>
  );
}

Pricing.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Pricing;
