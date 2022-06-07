import { render } from '@testing-library/react';

import LockOpen from './lock-open';

describe('LockOpen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LockOpen />);
    expect(baseElement).toBeTruthy();
  });
});
