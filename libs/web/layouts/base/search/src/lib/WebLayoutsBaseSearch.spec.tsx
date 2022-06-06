import { render } from '@testing-library/react';

import WebLayoutsBaseSearch from './WebLayoutsBaseSearch';

describe('WebLayoutsBaseSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseSearch />);
    expect(baseElement).toBeTruthy();
  });
});
