import { render } from '@testing-library/react';

import WebLayoutsLandingHeader from './WebLayoutsLandingHeader';

describe('WebLayoutsLandingHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingHeader />);
    expect(baseElement).toBeTruthy();
  });
});
