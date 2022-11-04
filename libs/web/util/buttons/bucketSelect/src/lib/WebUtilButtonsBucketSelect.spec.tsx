import { render } from '@testing-library/react';

import WebUtilButtonsBucketselect from './WebUtilButtonsBucketselect';

describe('WebUtilButtonsBucketselect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsBucketselect />);
    expect(baseElement).toBeTruthy();
  });
});
