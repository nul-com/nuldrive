import { render } from '@testing-library/react';

import WebUtilTooltip from './WebUtilTooltip';

describe('WebUtilTooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilTooltip />);
    expect(baseElement).toBeTruthy();
  });
});
