import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFaq from './WebLayoutsLandingSectionsFaq';

describe('WebLayoutsLandingSectionsFaq', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsFaq />);
    expect(baseElement).toBeTruthy();
  });
});
