import { render } from '@testing-library/react';

import EllipsisH from './ellipsis-h';

describe('EllipsisH', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EllipsisH />);
    expect(baseElement).toBeTruthy();
  });
});
