import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsBlogList from './WebLayoutsLandingSectionsBlogList';

describe('WebLayoutsLandingSectionsBlogList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsBlogList />);
    expect(baseElement).toBeTruthy();
  });
});
