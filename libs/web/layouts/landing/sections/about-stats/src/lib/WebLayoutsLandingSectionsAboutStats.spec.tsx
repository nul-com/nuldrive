import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsAboutStats from './WebLayoutsLandingSectionsAboutStats';

describe('WebLayoutsLandingSectionsAboutStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsAboutStats />);
    expect(baseElement).toBeTruthy();
  });
});
