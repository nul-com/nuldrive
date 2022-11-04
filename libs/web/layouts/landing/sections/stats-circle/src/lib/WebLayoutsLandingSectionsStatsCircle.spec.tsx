import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsStatsCircle from './WebLayoutsLandingSectionsStatsCircle';

describe('WebLayoutsLandingSectionsStatsCircle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsStatsCircle />);
    expect(baseElement).toBeTruthy();
  });
});
