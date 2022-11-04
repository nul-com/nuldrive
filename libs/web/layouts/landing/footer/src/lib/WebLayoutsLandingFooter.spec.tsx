import { render } from '@testing-library/react';

import WebLayoutsLandingFooter from './WebLayoutsLandingFooter';

describe('WebLayoutsLandingFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingFooter />);
    expect(baseElement).toBeTruthy();
  });
});
