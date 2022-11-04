import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Parallax from 'parallax-js';

export interface ErrorProps {}

export function Error(props: ErrorProps) {
  const sceneEl = useRef<any>(null);

  useEffect(() => {
    if (sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });
      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }
  }, [sceneEl]);
  return (
    <div className="error_container">
      <div className="about">
        <div className="bg_links social portfolio">
          <Link href="/">
            <span className="icon"></span>
          </Link>
        </div>
        <div className="bg_links social dribbble">
          <Link href="/">
            <span className="icon"></span>
          </Link>
        </div>
        <div className="bg_links social instagram">
          <Link href="/">
            <span className="icon"></span>
          </Link>
        </div>
        <a className="bg_links logo"></a>
      </div>

      <nav>
        <div className="menu">
          <Link href="/">
            <p className="website_name">NULDRIVE</p>
          </Link>
          <div className="menu_links">
            <a href="/about" className="link">
              about
            </a>
            <a href="/blog" className="link">
              Blog
            </a>
            <a href="/contact" className="link">
              contact us
            </a>
          </div>
          <div className="menu_icon">
            <span className="icon"></span>
          </div>
        </div>
      </nav>
      <section className="wrapper">
        <div className="container">
          <div
            id="scene"
            className="scene"
            data-hover-only="false"
            ref={sceneEl}
          >
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>
            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>
                You have reached the END. 🦍🚀🌕 <br />
                Go to the Homepage if you dare!
              </p>
              <Link href="/">
                <button>
                  <span className="">I dare!</span>
                </button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error;
