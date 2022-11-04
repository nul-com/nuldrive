import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsNewsletter from './WebLayoutsLandingSectionsNewsletter';

describe('WebLayoutsLandingSectionsNewsletter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsNewsletter />);
    expect(baseElement).toBeTruthy();
  });
});
