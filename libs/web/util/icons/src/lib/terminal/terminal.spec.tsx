import { render } from '@testing-library/react';

import Terminal from './terminal';

describe('Terminal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Terminal />);
    expect(baseElement).toBeTruthy();
  });
});
