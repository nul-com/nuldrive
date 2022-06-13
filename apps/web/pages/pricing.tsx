import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { IllustrationRed } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsPricingTable } from 'libs/web/layouts/landing/sections/pricing-table/src';

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
    </main>
  );
}

Pricing.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Pricing;
