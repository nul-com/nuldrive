import { render } from '@testing-library/react';

import CloudDownload from './cloud-download';

describe('CloudDownload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloudDownload />);
    expect(baseElement).toBeTruthy();
  });
});
