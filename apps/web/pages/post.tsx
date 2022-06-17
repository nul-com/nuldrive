import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsPost } from 'libs/web/layouts/landing/sections/post/src';
import { WebLayoutsLandingSectionsNewsletter } from '@nuldrive/web/layouts/landing/sections//newsletter';

export interface PostProps {}
export function Post(props: PostProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsPost />
      <WebLayoutsLandingSectionsNewsletter />
    </main>
  );
}

Post.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Post;
