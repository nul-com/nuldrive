import { render } from '@testing-library/react';

import WebLayoutsBaseMenu from './WebLayoutsBaseMenu';

describe('WebLayoutsBaseMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseMenu />);
    expect(baseElement).toBeTruthy();
  });
});
