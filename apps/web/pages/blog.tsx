import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsBlogList } from 'libs/web/layouts/landing/sections/blog-list/src';
import { WebLayoutsLandingSectionsNewsletter } from '@nuldrive/web/layouts/landing/sections//newsletter';

export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
    <main className="grow">
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsBlogList />
      <WebLayoutsLandingSectionsNewsletter />
    </main>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Blog;
