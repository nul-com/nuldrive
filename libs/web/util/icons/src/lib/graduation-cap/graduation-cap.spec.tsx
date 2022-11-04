import { render } from '@testing-library/react';

import GraduationCap from './graduation-cap';

describe('GraduationCap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GraduationCap />);
    expect(baseElement).toBeTruthy();
  });
});
