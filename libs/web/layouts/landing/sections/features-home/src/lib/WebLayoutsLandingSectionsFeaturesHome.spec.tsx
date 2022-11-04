import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFeaturesHome from './WebLayoutsLandingSectionsFeaturesHome';

describe('WebLayoutsLandingSectionsFeaturesHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsFeaturesHome />);
    expect(baseElement).toBeTruthy();
  });
});
