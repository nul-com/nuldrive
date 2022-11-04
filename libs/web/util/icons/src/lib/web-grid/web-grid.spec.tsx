import { render } from '@testing-library/react';

import WebGrid from './web-grid';

describe('WebGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebGrid />);
    expect(baseElement).toBeTruthy();
  });
});
