import { render } from '@testing-library/react';

import WebUtilButtonsSync from './WebUtilButtonsSync';

describe('WebUtilButtonsSync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsSync />);
    expect(baseElement).toBeTruthy();
  });
});
