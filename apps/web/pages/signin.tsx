import { ReactElement, useEffect, useRef, useState } from 'react';
import { WebLayoutsLandingSign } from '@nuldrive/web/layouts/landing/sign';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSignIn } from '@nuldrive/web/layouts/landing/sections/sign-in';
import WebUtilSpace from '@nuldrive/space';
import { WebLayoutsLandingSectionsSign } from '@nuldrive/web/layouts/landing/sections/sign';

export interface SignInProps {}
export function SignIn(props: SignInProps) {
  const canvasRef = useRef<HTMLCanvasElement>();
  const [space, setSpace] = useState<any>();

  useEffect(() => {
    const space = new WebUtilSpace({ canvas: canvasRef.current });
    space.start();
    setSpace(space);
  }, []);

  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsSign space={space} />
      <canvas className="fixed top-0 w-full h-full" ref={canvasRef}></canvas>
    </main>
  );
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingSign>{page}</WebLayoutsLandingSign>;
};

export default SignIn;
