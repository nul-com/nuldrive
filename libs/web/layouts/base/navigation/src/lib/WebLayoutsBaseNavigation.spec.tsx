import { render } from '@testing-library/react';

import WebLayoutsBaseNavigation from './WebLayoutsBaseNavigation';

describe('WebLayoutsBaseNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
