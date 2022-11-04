import { render } from '@testing-library/react';

import WebUtilEnvironment from './WebUtilEnvironment';

describe('WebUtilEnvironment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilEnvironment />);
    expect(baseElement).toBeTruthy();
  });
});
