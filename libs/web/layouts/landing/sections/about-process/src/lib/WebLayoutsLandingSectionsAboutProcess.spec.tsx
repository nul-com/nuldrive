import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsAboutProcess from './WebLayoutsLandingSectionsAboutProcess';

describe('WebLayoutsLandingSectionsAboutProcess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsAboutProcess />);
    expect(baseElement).toBeTruthy();
  });
});
