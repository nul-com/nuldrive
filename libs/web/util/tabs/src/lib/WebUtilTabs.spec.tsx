import { render } from '@testing-library/react';

import WebUtilTabs from './WebUtilTabs';

describe('WebUtilTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilTabs />);
    expect(baseElement).toBeTruthy();
  });
});
