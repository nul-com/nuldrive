import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSignIn } from 'libs/web/layouts/landing/sections/sign-in/src';

export interface SignInProps {}
export function SignIn(props: SignInProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsSignIn />
    </main>
  );
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default SignIn;
