import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsPricingCta from './WebLayoutsLandingSectionsPricingCta';

describe('WebLayoutsLandingSectionsPricingCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsPricingCta />);
    expect(baseElement).toBeTruthy();
  });
});
