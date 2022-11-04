import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsNews from './WebLayoutsLandingSectionsNews';

describe('WebLayoutsLandingSectionsNews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsNews />);
    expect(baseElement).toBeTruthy();
  });
});
