import { render } from '@testing-library/react';

import WebUtilButtonsSearch from './WebUtilButtonsSearch';

describe('WebUtilButtonsSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsSearch />);
    expect(baseElement).toBeTruthy();
  });
});
