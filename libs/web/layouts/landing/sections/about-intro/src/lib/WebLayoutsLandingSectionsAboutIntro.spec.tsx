import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsAboutIntro from './WebLayoutsLandingSectionsAboutIntro';

describe('WebLayoutsLandingSectionsAboutIntro', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsAboutIntro />);
    expect(baseElement).toBeTruthy();
  });
});
