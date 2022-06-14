import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsDocumentationContent from './WebLayoutsLandingSectionsDocumentationContent';

describe('WebLayoutsLandingSectionsDocumentationContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WebLayoutsLandingSectionsDocumentationContent />
    );
    expect(baseElement).toBeTruthy();
  });
});
