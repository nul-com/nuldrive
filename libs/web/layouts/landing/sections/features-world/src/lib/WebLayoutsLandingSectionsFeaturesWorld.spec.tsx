import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFeaturesWorld from './WebLayoutsLandingSectionsFeaturesWorld';

describe('WebLayoutsLandingSectionsFeaturesWorld', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsFeaturesWorld />);
    expect(baseElement).toBeTruthy();
  });
});
