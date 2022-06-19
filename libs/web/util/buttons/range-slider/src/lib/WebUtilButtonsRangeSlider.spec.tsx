import { render } from '@testing-library/react';

import WebUtilButtonsRangeSlider from './WebUtilButtonsRangeSlider';

describe('WebUtilButtonsRangeSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilButtonsRangeSlider />);
    expect(baseElement).toBeTruthy();
  });
});
