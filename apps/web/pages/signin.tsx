import { ReactElement, useEffect, useRef } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSignIn } from '@nuldrive/web/layouts/landing/sections/sign-in';
import WebUtilSpace from '@nuldrive/space';

export interface SignInProps {}
export function SignIn(props: SignInProps) {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    const space = new WebUtilSpace({ canvas: canvasRef.current });
    space.start();
  }, []);
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsSignIn />
      <canvas className='fixed top-0 w-full h-full' ref={canvasRef}></canvas>
    </main>
  );
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default SignIn;
