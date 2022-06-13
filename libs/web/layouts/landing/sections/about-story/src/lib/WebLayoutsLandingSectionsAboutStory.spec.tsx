import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsAboutStory from './WebLayoutsLandingSectionsAboutStory';

describe('WebLayoutsLandingSectionsAboutStory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsAboutStory />);
    expect(baseElement).toBeTruthy();
  });
});
