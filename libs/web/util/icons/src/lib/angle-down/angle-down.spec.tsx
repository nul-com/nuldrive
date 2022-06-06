import { render } from '@testing-library/react';

import AngleDown from './angle-down';

describe('AngleDown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AngleDown />);
    expect(baseElement).toBeTruthy();
  });
});
