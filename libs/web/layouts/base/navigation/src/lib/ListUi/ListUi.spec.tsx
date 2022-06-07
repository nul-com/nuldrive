import { render } from '@testing-library/react';

import ListUi from './ListUi';

describe('ListUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListUi />);
    expect(baseElement).toBeTruthy();
  });
});
