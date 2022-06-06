import { render } from '@testing-library/react';

import WebUtilAvatar from './WebUtilAvatar';

describe('WebUtilAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
