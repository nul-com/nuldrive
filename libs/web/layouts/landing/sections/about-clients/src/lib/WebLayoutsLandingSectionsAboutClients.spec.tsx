import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsAboutClients from './WebLayoutsLandingSectionsAboutClients';

describe('WebLayoutsLandingSectionsAboutClients', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsAboutClients />);
    expect(baseElement).toBeTruthy();
  });
});
