import { render } from '@testing-library/react';

import WebUtilButtonsSync from './web-util-buttons-sync';

describe('WebUtilButtonsSync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsSync />);
    expect(baseElement).toBeTruthy();
  });
});
