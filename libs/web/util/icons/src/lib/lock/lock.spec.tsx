import { render } from '@testing-library/react';

import Lock from './lock';

describe('Lock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lock />);
    expect(baseElement).toBeTruthy();
  });
});
