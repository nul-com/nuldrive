import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsCaseStudies from './WebLayoutsLandingSectionsCaseStudies';

describe('WebLayoutsLandingSectionsCaseStudies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsCaseStudies />);
    expect(baseElement).toBeTruthy();
  });
});
