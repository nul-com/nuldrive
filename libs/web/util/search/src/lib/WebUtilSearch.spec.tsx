import { render } from '@testing-library/react';

import WebUtilSearch from './WebUtilSearch';

describe('WebUtilSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilSearch />);
    expect(baseElement).toBeTruthy();
  });
});
