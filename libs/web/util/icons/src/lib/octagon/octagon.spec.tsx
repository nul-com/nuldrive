import { render } from '@testing-library/react';

import Octagon from './octagon';

describe('Octagon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Octagon />);
    expect(baseElement).toBeTruthy();
  });
});
