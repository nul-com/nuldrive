import { render } from '@testing-library/react';

import Transition from './transition';

describe('Transition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Transition />);
    expect(baseElement).toBeTruthy();
  });
});
