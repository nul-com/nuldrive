import { render } from '@testing-library/react';

import CssTransition from './css-transition';

describe('CssTransition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CssTransition />);
    expect(baseElement).toBeTruthy();
  });
});
