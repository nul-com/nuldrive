import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTutorialsList from './WebLayoutsLandingSectionsTutorialsList';

describe('WebLayoutsLandingSectionsTutorialsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsTutorialsList />);
    expect(baseElement).toBeTruthy();
  });
});
