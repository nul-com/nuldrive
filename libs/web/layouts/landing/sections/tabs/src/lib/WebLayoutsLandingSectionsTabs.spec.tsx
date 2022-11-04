import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTabs from './WebLayoutsLandingSectionsTabs';

describe('WebLayoutsLandingSectionsTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsTabs />);
    expect(baseElement).toBeTruthy();
  });
});
