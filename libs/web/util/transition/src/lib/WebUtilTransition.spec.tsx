import { render } from '@testing-library/react';

import WebUtilTransition from './WebUtilTransition';

describe('WebUtilTransition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilTransition />);
    expect(baseElement).toBeTruthy();
  });
});
