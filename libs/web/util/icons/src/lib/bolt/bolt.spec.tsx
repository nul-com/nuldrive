import { render } from '@testing-library/react';

import Bolt from './bolt';

describe('Bolt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bolt />);
    expect(baseElement).toBeTruthy();
  });
});
