import { render } from '@testing-library/react';

import WebUtilImageloader from './WebUtilImageloader';

describe('WebUtilImageloader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilImageloader />);
    expect(baseElement).toBeTruthy();
  });
});
