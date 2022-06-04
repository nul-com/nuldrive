import { render } from '@testing-library/react';

import WebUtilIcons from './WebUtilIcons';

describe('WebUtilIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilIcons />);
    expect(baseElement).toBeTruthy();
  });
});
