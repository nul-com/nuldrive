import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsDocumentation from './WebLayoutsLandingSectionsDocumentation';

describe('WebLayoutsLandingSectionsDocumentation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsDocumentation />);
    expect(baseElement).toBeTruthy();
  });
});
