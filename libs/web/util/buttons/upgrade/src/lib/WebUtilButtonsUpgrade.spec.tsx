import { render } from '@testing-library/react';

import WebUtilButtonsUpgrade from './WebUtilButtonsUpgrade';

describe('WebUtilButtonsUpgrade', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsUpgrade />);
    expect(baseElement).toBeTruthy();
  });
});
