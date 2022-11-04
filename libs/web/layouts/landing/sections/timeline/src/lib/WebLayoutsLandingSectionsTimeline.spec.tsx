import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTimeline from './WebLayoutsLandingSectionsTimeline';

describe('WebLayoutsLandingSectionsTimeline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsTimeline />);
    expect(baseElement).toBeTruthy();
  });
});
