import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFeaturesBlocks from './WebLayoutsLandingSectionsFeaturesBlocks';

describe('WebLayoutsLandingSectionsFeaturesBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsFeaturesBlocks />);
    expect(baseElement).toBeTruthy();
  });
});
