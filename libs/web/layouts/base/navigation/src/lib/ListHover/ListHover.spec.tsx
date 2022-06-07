import { render } from '@testing-library/react';

import ListHover from './ListHover';

describe('ListHover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListHover />);
    expect(baseElement).toBeTruthy();
  });
});
