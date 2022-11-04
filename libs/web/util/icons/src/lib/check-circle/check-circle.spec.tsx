import { render } from '@testing-library/react';

import CheckCircle from './check-circle';

describe('CheckCircle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckCircle />);
    expect(baseElement).toBeTruthy();
  });
});
