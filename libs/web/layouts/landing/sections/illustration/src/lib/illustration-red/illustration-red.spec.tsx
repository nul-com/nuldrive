import { render } from '@testing-library/react';

import IllustrationRed from './illustration-red';

describe('IllustrationRed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IllustrationRed />);
    expect(baseElement).toBeTruthy();
  });
});
