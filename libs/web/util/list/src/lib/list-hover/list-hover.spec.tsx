import { render } from '@testing-library/react';

import ListHover from './list-hover';

describe('ListHover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListHover />);
    expect(baseElement).toBeTruthy();
  });
});
