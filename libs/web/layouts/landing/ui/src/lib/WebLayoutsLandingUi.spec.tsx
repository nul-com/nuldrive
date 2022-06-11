import { render } from '@testing-library/react';

import WebLayoutsLandingUi from './WebLayoutsLandingUi';

describe('WebLayoutsLandingUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingUi />);
    expect(baseElement).toBeTruthy();
  });
});
