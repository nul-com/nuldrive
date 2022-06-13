import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsPricingCarousel from './WebLayoutsLandingSectionsPricingCarousel';

describe('WebLayoutsLandingSectionsPricingCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WebLayoutsLandingSectionsPricingCarousel />
    );
    expect(baseElement).toBeTruthy();
  });
});
