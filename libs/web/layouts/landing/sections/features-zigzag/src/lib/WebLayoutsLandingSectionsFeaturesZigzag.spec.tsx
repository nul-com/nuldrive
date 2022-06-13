import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFeaturesZigzag from './WebLayoutsLandingSectionsFeaturesZigzag';

describe('WebLayoutsLandingSectionsFeaturesZigzag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsFeaturesZigzag />);
    expect(baseElement).toBeTruthy();
  });
});
