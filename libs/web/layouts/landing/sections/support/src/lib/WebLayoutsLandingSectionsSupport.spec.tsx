import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsSupport from './WebLayoutsLandingSectionsSupport';

describe('WebLayoutsLandingSectionsSupport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsSupport />);
    expect(baseElement).toBeTruthy();
  });
});
