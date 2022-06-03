import { render } from '@testing-library/react';

import WebLayoutsBaseUi from './WebLayoutsBaseUi';

describe('WebLayoutsBaseUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseUi />);
    expect(baseElement).toBeTruthy();
  });
});
