import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsHelpCenter from './WebLayoutsLandingSectionsHelpCenter';

describe('WebLayoutsLandingSectionsHelpCenter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsHelpCenter />);
    expect(baseElement).toBeTruthy();
  });
});
