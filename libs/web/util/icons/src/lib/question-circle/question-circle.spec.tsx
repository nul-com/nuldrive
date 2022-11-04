import { render } from '@testing-library/react';

import QuestionCircle from './question-circle';

describe('QuestionCircle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionCircle />);
    expect(baseElement).toBeTruthy();
  });
});
