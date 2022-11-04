import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsCtaAlternative from './WebLayoutsLandingSectionsCtaAlternative';

describe('WebLayoutsLandingSectionsCtaAlternative', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsCtaAlternative />);
    expect(baseElement).toBeTruthy();
  });
});
