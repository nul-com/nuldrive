import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsPost from './WebLayoutsLandingSectionsPost';

describe('WebLayoutsLandingSectionsPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsPost />);
    expect(baseElement).toBeTruthy();
  });
});
