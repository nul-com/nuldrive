import { render } from '@testing-library/react';

import WebLayoutsBaseFooter from './WebLayoutsBaseFooter';

describe('WebLayoutsBaseFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseFooter />);
    expect(baseElement).toBeTruthy();
  });
});
