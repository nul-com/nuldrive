import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsCareer from './WebLayoutsLandingSectionsCareer';

describe('WebLayoutsLandingSectionsCareer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsLandingSectionsCareer />);
    expect(baseElement).toBeTruthy();
  });
});
