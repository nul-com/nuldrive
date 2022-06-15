import { ReactElement, useEffect, useRef } from 'react';
import { WebLayoutsLandingSign } from '@nuldrive/web/layouts/landing/sign';
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
      <WebLayoutsLandingSectionsSignIn />
      <canvas className="fixed top-0 w-full h-full" ref={canvasRef}></canvas>
    </main>
  );
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingSign>{page}</WebLayoutsLandingSign>;
};

export default SignIn;
