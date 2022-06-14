import { ReactElement, useRef, useEffect } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSignUp } from 'libs/web/layouts/landing/sections/sign-up/src';
import SpaceTravel from 'space-travel';

export interface SignUpProps {}
export function SignUp(props: SignUpProps) {
  const canvasRef = useRef<any>();
  let paused = false;
  let throttle = 0;

  let space: any;

  const handleHover = () => {
    space.throttle = 1.2;
    // var secs = 10;
    // const upInterval = setInterval(() => {
    //   throttle += 0.1;
    //   space.throttle = throttle;
    //   console.log(throttle);

    //   if (throttle > 1) {
    //     console.log('reaced');
    //     clearInterval(upInterval);
    //   }
    // }, secs);
  };
  const unHandleHover = () => {
    space.throttle = 0.001;
  };

  useEffect(() => {
    space = new SpaceTravel({ canvas: canvasRef.current, throttle });
    space.start();

    document.addEventListener('visibilitychange', () => {
      if (paused) {
        return;
      }

      if (document.hidden) {
        space.pause();
      } else {
        space.resume();
      }
    });

    window.addEventListener('resize', () => {
      space.resize();
    });
  });

  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsSignUp />
      <canvas
        id="space-travel"
        className="fixed bottom-0 w-full h-full"
        ref={canvasRef}
      ></canvas>
    </main>
  );
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default SignUp;
