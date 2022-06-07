import { render } from '@testing-library/react';

import Cookie from './cookie';

describe('Cookie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cookie />);
    expect(baseElement).toBeTruthy();
  });
});
