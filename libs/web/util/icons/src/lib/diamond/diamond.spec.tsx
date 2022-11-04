import { render } from '@testing-library/react';

import Diamond from './diamond';

describe('Diamond', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Diamond />);
    expect(baseElement).toBeTruthy();
  });
});
