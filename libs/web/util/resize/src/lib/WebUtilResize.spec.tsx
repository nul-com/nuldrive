import { render } from '@testing-library/react';

import WebUtilResize from './WebUtilResize';

describe('WebUtilResize', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilResize />);
    expect(baseElement).toBeTruthy();
  });
});
