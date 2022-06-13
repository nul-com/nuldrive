import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsSupportForm from './WebLayoutsLandingSectionsSupportForm';

describe('WebLayoutsLandingSectionsSupportForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsSupportForm />);
    expect(baseElement).toBeTruthy();
  });
});
