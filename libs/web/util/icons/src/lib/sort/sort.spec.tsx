import { render } from '@testing-library/react';

import Sort from './sort';

describe('Sort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sort />);
    expect(baseElement).toBeTruthy();
  });
});
