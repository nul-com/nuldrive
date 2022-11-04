import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsSignUp from './WebLayoutsLandingSectionsSignUp';

describe('WebLayoutsLandingSectionsSignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsSignUp />);
    expect(baseElement).toBeTruthy();
  });
});
