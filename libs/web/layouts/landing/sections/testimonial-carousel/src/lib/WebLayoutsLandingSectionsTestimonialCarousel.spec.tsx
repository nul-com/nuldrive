import { render } from '@testing-library/react';

import WebLayoutsLandingSectionsTestimonialCarousel from './WebLayoutsLandingSectionsTestimonialCarousel';

describe('WebLayoutsLandingSectionsTestimonialCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WebLayoutsLandingSectionsTestimonialCarousel />
    );
    expect(baseElement).toBeTruthy();
  });
});
