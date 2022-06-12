import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFeaturesExplore from './WebLayoutsLandingSectionsFeaturesExplore';

describe('WebLayoutsLandingSectionsFeaturesExplore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WebLayoutsLandingSectionsFeaturesExplore />
    );
    expect(baseElement).toBeTruthy();
  });
});
