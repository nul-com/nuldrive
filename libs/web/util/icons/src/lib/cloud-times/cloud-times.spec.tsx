import { render } from '@testing-library/react';

import CloudTimes from './cloud-times';

describe('CloudTimes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloudTimes />);
    expect(baseElement).toBeTruthy();
  });
});
