import { render } from '@testing-library/react';

import Folder from './folder';

describe('Folder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Folder />);
    expect(baseElement).toBeTruthy();
  });
});
