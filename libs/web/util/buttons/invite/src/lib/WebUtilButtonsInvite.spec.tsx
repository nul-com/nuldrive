import { render } from '@testing-library/react';

import WebUtilButtonsInvite from './WebUtilButtonsInvite';

describe('WebUtilButtonsInvite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsInvite />);
    expect(baseElement).toBeTruthy();
  });
});
