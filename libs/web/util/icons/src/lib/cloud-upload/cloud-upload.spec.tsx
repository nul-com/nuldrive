import { render } from '@testing-library/react';

import CloudUpload from './cloud-upload';

describe('CloudUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloudUpload />);
    expect(baseElement).toBeTruthy();
  });
});
