import { render } from '@testing-library/react';

import Plus from './plus';

describe('Plus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Plus />);
    expect(baseElement).toBeTruthy();
  });
});
