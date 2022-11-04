import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsAwesomeCta from './WebLayoutsLandingSectionsAwesomeCta';

describe('WebLayoutsLandingSectionsAwesomeCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsAwesomeCta />);
    expect(baseElement).toBeTruthy();
  });
});
