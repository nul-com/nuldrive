import { render } from '@testing-library/react';

import WebLayoutsLandingList from './WebLayoutsLandingList';

describe('WebLayoutsLandingList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingList />);
    expect(baseElement).toBeTruthy();
  });
});
