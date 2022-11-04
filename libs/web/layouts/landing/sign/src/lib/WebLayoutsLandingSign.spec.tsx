import { render } from '@testing-library/react';

import WebLayoutsLandingSign from './WebLayoutsLandingSign';

describe('WebLayoutsLandingSign', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSign />);
    expect(baseElement).toBeTruthy();
  });
});
