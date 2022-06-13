import { render } from '@testing-library/react';

import WebUtilAccordion from './WebUtilAccordion';

describe('WebUtilAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
