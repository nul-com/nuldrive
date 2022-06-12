import { render } from '@testing-library/react';

import WebLayoutsLandingHero from './WebLayoutsLandingHero';

describe('WebLayoutsLandingHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingHero />);
    expect(baseElement).toBeTruthy();
  });
});
