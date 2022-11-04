import { render } from '@testing-library/react';

import CloudCheck from './cloud-check';

describe('CloudCheck', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloudCheck />);
    expect(baseElement).toBeTruthy();
  });
});
