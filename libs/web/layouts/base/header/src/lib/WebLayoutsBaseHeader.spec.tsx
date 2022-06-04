import { render } from '@testing-library/react';

import WebLayoutsBaseHeader from './WebLayoutsBaseHeader';

describe('WebLayoutsBaseHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseHeader />);
    expect(baseElement).toBeTruthy();
  });
});
