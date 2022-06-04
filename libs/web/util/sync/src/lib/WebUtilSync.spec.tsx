import { render } from '@testing-library/react';

import WebUtilSync from './WebUtilSync';

describe('WebUtilSync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilSync />);
    expect(baseElement).toBeTruthy();
  });
});
