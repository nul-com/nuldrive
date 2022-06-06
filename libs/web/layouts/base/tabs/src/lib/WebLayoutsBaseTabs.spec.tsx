import { render } from '@testing-library/react';

import WebLayoutsBaseTabs from './WebLayoutsBaseTabs';

describe('WebLayoutsBaseTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBaseTabs />);
    expect(baseElement).toBeTruthy();
  });
});
