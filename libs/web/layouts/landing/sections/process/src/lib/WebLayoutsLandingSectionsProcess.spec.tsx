import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsProcess from './WebLayoutsLandingSectionsProcess';

describe('WebLayoutsLandingSectionsProcess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsProcess />);
    expect(baseElement).toBeTruthy();
  });
});
