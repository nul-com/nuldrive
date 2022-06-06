import { render } from '@testing-library/react';

import WebLayoutsBaseSidebar from './WebLayoutsBaseSidebar';

describe('WebLayoutsBaseSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
