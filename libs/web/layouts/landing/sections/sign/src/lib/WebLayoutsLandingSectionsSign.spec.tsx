import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsSign from './WebLayoutsLandingSectionsSign';

describe('WebLayoutsLandingSectionsSign', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsSign />);
    expect(baseElement).toBeTruthy();
  });
});
