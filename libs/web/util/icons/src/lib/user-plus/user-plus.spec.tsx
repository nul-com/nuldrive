import { render } from '@testing-library/react';

import UserPlus from './user-plus';

describe('UserPlus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserPlus />);
    expect(baseElement).toBeTruthy();
  });
});
