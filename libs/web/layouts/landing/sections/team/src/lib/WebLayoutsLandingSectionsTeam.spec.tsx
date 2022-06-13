import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTeam from './WebLayoutsLandingSectionsTeam';

describe('WebLayoutsLandingSectionsTeam', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsTeam />);
    expect(baseElement).toBeTruthy();
  });
});
