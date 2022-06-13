import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsPricingTable from './WebLayoutsLandingSectionsPricingTable';

describe('WebLayoutsLandingSectionsPricingTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsPricingTable />);
    expect(baseElement).toBeTruthy();
  });
});
