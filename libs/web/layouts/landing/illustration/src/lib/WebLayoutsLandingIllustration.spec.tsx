import { render } from '@testing-library/react';

import WebLayoutsLandingIllustration from './WebLayoutsLandingIllustration';

describe('WebLayoutsLandingIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingIllustration />);
    expect(baseElement).toBeTruthy();
  });
});
