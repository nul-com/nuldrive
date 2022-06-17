import { ReactElement, useRef, useEffect, useState } from 'react';
import { WebLayoutsLandingSign } from '@nuldrive/web/layouts/landing/sign';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSignUp } from '@nuldrive/web/layouts/landing/sections/sign-up';
import WebUtilSpace from '@nuldrive/space';

export interface SignUpProps {}
export function SignUp(props: SignUpProps) {
  const canvasRef = useRef<any>();
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
      <WebLayoutsLandingSectionsSignUp space={space} />
      <canvas
        id="space-travel"
        className="fixed bottom-0 w-full h-full"
        ref={canvasRef}
      ></canvas>
    </main>
  );
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingSign>{page}</WebLayoutsLandingSign>;
};

export default SignUp;
