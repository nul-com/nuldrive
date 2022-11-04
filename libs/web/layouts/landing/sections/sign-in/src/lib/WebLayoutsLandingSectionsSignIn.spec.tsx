import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsSignIn from './WebLayoutsLandingSectionsSignIn';

describe('WebLayoutsLandingSectionsSignIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsSignIn />);
    expect(baseElement).toBeTruthy();
  });
});
