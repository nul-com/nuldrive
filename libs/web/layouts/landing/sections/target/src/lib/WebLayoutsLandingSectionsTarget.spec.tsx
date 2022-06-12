import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTarget from './WebLayoutsLandingSectionsTarget';

describe('WebLayoutsLandingSectionsTarget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsTarget />);
    expect(baseElement).toBeTruthy();
  });
});
