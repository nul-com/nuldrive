import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsHeroFeatures from './WebLayoutsLandingSectionsHeroFeatures';

describe('WebLayoutsLandingSectionsHeroFeatures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsHeroFeatures />);
    expect(baseElement).toBeTruthy();
  });
});
