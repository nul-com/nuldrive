import { render } from '@testing-library/react';

import Times from './times';

describe('Times', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Times />);
    expect(baseElement).toBeTruthy();
  });
});
