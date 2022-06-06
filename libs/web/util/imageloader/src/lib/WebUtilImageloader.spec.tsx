import { render } from '@testing-library/react';

import WebUtilImageLoader from './WebUtilImageLoader';

describe('WebUtilImageloader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilImageLoader />);
    expect(baseElement).toBeTruthy();
  });
});
