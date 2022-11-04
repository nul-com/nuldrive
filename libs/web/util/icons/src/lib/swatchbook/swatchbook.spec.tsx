import { render } from '@testing-library/react';

import Swatchbook from './swatchbook';

describe('Swatchbook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Swatchbook />);
    expect(baseElement).toBeTruthy();
  });
});
