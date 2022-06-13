import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsFeaturesTable from './WebLayoutsLandingSectionsFeaturesTable';

describe('WebLayoutsLandingSectionsFeaturesTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsFeaturesTable />);
    expect(baseElement).toBeTruthy();
  });
});
