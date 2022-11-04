import { render } from '@testing-library/react';

import WebLayoutsBasePanel1 from './WebLayoutsBasePanel1';

describe('WebLayoutsBasePanel1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBasePanel1 />);
    expect(baseElement).toBeTruthy();
  });
});
