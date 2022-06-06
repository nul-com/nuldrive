import { render } from '@testing-library/react';

import WebLayoutsBasePanels from './WebLayoutsBasePanels';

describe('WebLayoutsBasePanels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsBasePanels />);
    expect(baseElement).toBeTruthy();
  });
});
