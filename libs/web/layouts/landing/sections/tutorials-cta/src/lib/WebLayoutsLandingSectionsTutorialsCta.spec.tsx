import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTutorialsCta from './WebLayoutsLandingSectionsTutorialsCta';

describe('WebLayoutsLandingSectionsTutorialsCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsTutorialsCta />);
    expect(baseElement).toBeTruthy();
  });
});
