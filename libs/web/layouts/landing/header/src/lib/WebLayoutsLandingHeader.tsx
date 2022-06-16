import React, { useState, useRef, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { WebLayoutsLandingList } from '@nuldrive/web-util-list';
import { Dropdown } from '@nuldrive/web/layouts/landing/header';
import { webUtilAddScript } from '@nuldrive/web/util/add-script';
import { webUtilRemoveScript } from '@nuldrive/web/util/remove-script';
// const ParticleSlider = require('../../ps-0.9.js');
import Script from 'next/script';

import styles from './WebLayoutsLandingHeader.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingHeaderProps {}

export function WebLayoutsLandingHeader(props: WebLayoutsLandingHeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState<any>(false);
  const [top, setTop] = useState(true);

  const trigger = useRef<any>(null);
  const mobileNav = useRef<any>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: any }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: any }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  // useEffect(() => {
  //   const script = webUtilAddScript({
  //     src: 'https://r2.eriascdn.com/ps-0.9.js',
  //     id: 'particle-slider',
  //     onLoad: () => {
  //       console.log('Particle Slider script loaded!');
  //     },
  //   });

  //   //@ts-ignore
  //   var ps = new ParticleSlider({
  //     ptlGap: 0,
  //     ptlSize: 1,
  //     width: 1e9,
  //     height: 1e9,
  //   });
  //   ps.restless = false;

  //   return () => webUtilRemoveScript({ id: script.id });
  // });
  // new ParticleSlider({ ptlGap: 0, ptlSize: 1, width: 1e9, height: 1e9 });
  // ps.restless = false;

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-slate-900 backdrop-blur-sm shadow-lg'
      }`}
    >
      <Script id="show-banner" type="text/javascript" strategy="afterInteractive">
        {`var ps = new ParticleSlider({ ptlGap: 0, ptlSize: 1, width: 200, height: 500, mouseForce: 100 }); ps.restless = false; ps.init(true);`}
      </Script>
      <Script
        src="https://r2.eriascdn.com/ps-0.9.js"
        strategy="beforeInteractive"
      ></Script>
      <div className="max-w-6xl mx-auto pr-4 sm:pr-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="">
            {/* Logo */}
            <div className="block w-[150px] h-full relative md:w-[85px] navIcon:w-[150px]">
              <Link href="/" aria-label="Cruip">
                <div className="w-full h-full" id="particle-slider">
                  <div className="slides">
                    <div
                      id="first-slide"
                      className="slide"
                      data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA2MCA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg1NzEgMS4yMjQ0OUwxLjAyMDQxIDBMMS44MzY3MyA0LjQ4OThMNSA0Ljg1OTUzTDQuMjg1NzEgMS4yMjQ0OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNy41NTEgNi4zMjY1NEw0LjI4NTcxIDEuMjI0NDlMNSA0Ljg1OTUzTDE3LjU1MSA2LjMyNjU0WiIgZmlsbD0iI0RDNzYwMiIvPgo8cGF0aCBkPSJNMS44MzY3MyA0LjQ4OThMNC40ODk4IDE4LjM2NzRMMTIuODU3MSAxNS4wOTc5TDE3LjU1MSA2LjMyNjU0TDUgNC44NTk1M0wxLjgzNjczIDQuNDg5OFoiIGZpbGw9IiNGN0FEMzciLz4KPHBhdGggZD0iTTQuNDg5OCAxOC4zNjc0TDcuNDQ4OTggMjUuMjA0MUwxMi44NTcxIDE1LjA5NzlMNC40ODk4IDE4LjM2NzRaIiBmaWxsPSIjRjg4NDJFIi8+CjxwYXRoIGQ9Ik00LjQ4OTggMTguMzY3NEwwIDI1LjUxMDJMNy40NDg5OCAyNS4yMDQxTDQuNDg5OCAxOC4zNjc0WiIgZmlsbD0iI0JCNEIxRiIvPgo8cGF0aCBkPSJNMCAyNS41MTAyTDcuMTQyODYgMzUuODE2NEw3LjQ0ODk4IDI1LjIwNDFMMCAyNS41MTAyWiIgZmlsbD0iIzc2MDAxMSIvPgo8cGF0aCBkPSJNNy40NDg5OCAyNS4yMDQxTDExLjYzMjcgMzEuNzM0N0wxNi40Mjg2IDE5LjI4NTdMNy40NDg5OCAyNS4yMDQxWiIgZmlsbD0iI0RCNzUwMSIvPgo8cGF0aCBkPSJNMjQuNDg5OCAxMy43NzU1TDE3LjU1MSA2LjMyNjU0TDEyLjg1NzEgMTUuMDk3OUw3LjQ0ODk4IDI1LjIwNDFMMTYuNDI4NiAxOS4yODU3TDI0LjQ4OTggMTMuNzc1NVoiIGZpbGw9IiNCRDQ5MUUiLz4KPHBhdGggZD0iTTIzLjU3MTQgMy4xNjMyN0wxNy41NTEgNi4zMjY1NEwyNC40ODk4IDEzLjc3NTVMMjMuNzc1NSAzLjA4MzU1TDIzLjU3MTQgMy4xNjMyN1oiIGZpbGw9IiNGODg1MkMiLz4KPHBhdGggZD0iTTMwIDE5LjY5MzlMMjQuNDg5OCAxMy43NzU1TDE2LjQyODYgMTkuMjg1N0wxMS42MzI3IDMxLjczNDdMMTcuNjUzMSAyOS4xODM3TDE5LjY5MzkgMjQuNTkxOUwyMy44Nzc2IDI1LjgxNjNMMzAgMTkuNjkzOVoiIGZpbGw9IiNGNzgzMkQiLz4KPHBhdGggZD0iTTIzLjc3NTUgMy4wODM1NUwyNC40ODk4IDEzLjc3NTVMMzAgMTkuNjkzOUwyNi44ODc4IDExLjM4ODdMMjMuNzc1NSAzLjA4MzU1WiIgZmlsbD0iI0JCNDkyMCIvPgo8cGF0aCBkPSJNNy40NDg5OCAyNS4yMDQxTDcuMTQyODYgMzUuODE2NEwxNS4zMDYxIDM3LjczM0wxMS42MzI3IDMxLjczNDdMNy40NDg5OCAyNS4yMDQxWiIgZmlsbD0iI0JBNDgxRCIvPgo8cGF0aCBkPSJNMTguODc3NiAzOC41NzE1TDE3LjY1MzEgMjkuMTgzN0wxMS42MzI3IDMxLjczNDdMMTguODc3NiAzOC41NzE1WiIgZmlsbD0iI0Q5NzUwMSIvPgo8cGF0aCBkPSJNMTguODc3NiAzOC41NzE1TDExLjYzMjcgMzEuNzM0N0wxNS4zMDYxIDM3LjczM0wxOC44Nzc2IDM4LjU3MTVaIiBmaWxsPSIjNzUwMDEwIi8+CjxwYXRoIGQ9Ik0yNi4wMjA0IDI5Ljg5OEwyMy44Nzc2IDI1LjgxNjNMMTkuNjkzOSAyNC41OTE5TDIwLjkxODQgMjguNTcxNUwyNi4wMjA0IDI5Ljg5OFoiIGZpbGw9IiMwODBBMTUiLz4KPHBhdGggZD0iTTM5LjA4MTYgMjguNTcxNUw0MC42MTIyIDI0LjY5MzlMMzYuMDIwNCAyNS42MTIzTDMzLjk3OTYgMjkuODk4TDM5LjA4MTYgMjguNTcxNVoiIGZpbGw9IiMwODBBMTUiLz4KPHBhdGggZD0iTTMwIDM0LjI4NTdMMjYuMjI0NSAzNi44MzY4TDMwIDQwLjIwNDFMMzMuNzc1NSAzNi44MzY4TDMwIDM0LjI4NTdaIiBmaWxsPSIjMDgwQTE1Ii8+CjxwYXRoIGQ9Ik0yMC45MTg0IDI4LjU3MTVMMTkuNjkzOSAyNC41OTE5TDE3LjY1MzEgMjkuMTgzN0wxOC44Nzc2IDM4LjU3MTVMMjAuOTE4NCAyOC41NzE1WiIgZmlsbD0iI0JBNDkxQiIvPgo8cGF0aCBkPSJNMTguODc3NiAzOC41NzE1TDIzLjI2NTMgMzMuMTYzM0wyNi4wMjA0IDI5Ljg5OEwyMC45MTg0IDI4LjU3MTVMMTguODc3NiAzOC41NzE1WiIgZmlsbD0iIzc3MDAxMyIvPgo8cGF0aCBkPSJNMTguODc3NiAzOC41NzE1TDI2LjIyNDUgNDUuMTAyMUwyMi45NTkyIDM3LjY5MjdMMTguODc3NiAzOC41NzE1WiIgZmlsbD0iI0JCNEExQyIvPgo8cGF0aCBkPSJNMjYuMjI0NSA0NS4xMDIxVjQwLjEwMjFWMzYuODM2OEwyMi45NTkyIDM3LjY5MjdMMjYuMjI0NSA0NS4xMDIxWiIgZmlsbD0iI0Y3ODMyRiIvPgo8cGF0aCBkPSJNMTguODc3NiAzOC41NzE1TDIyLjk1OTIgMzcuNjkyN0wyNi4yMjQ1IDM2LjgzNjhMMjMuMjY1MyAzMy4xNjMzTDE4Ljg3NzYgMzguNTcxNVoiIGZpbGw9IiNEOTc1MDMiLz4KPHBhdGggZD0iTTM1LjQ3IDEzLjc3NTVMMzYuMjI0NSAzLjA2MTIzTDMwIDE5LjY5MzlMMzUuNDcgMTMuNzc1NVoiIGZpbGw9IiNCQjQ5MjAiLz4KPHBhdGggZD0iTTQyLjQ0OSA2LjIyNDVMMzYuMjI0NSAzLjA2MTIzTDM1LjQ3IDEzLjc3NTVMNDIuNDQ5IDYuMjI0NVoiIGZpbGw9IiNGODg1MkMiLz4KPHBhdGggZD0iTTQyLjQ0OSA2LjIyNDVMMzUuNDcgMTMuNzc1NUw0NC4wODE2IDE5LjU5MTlMNTIuNDQ5IDI1LjMwNjFMNDcuMTUxNyAxNS4xMDIxTDQyLjQ0OSA2LjIyNDVaIiBmaWxsPSIjQjg0OTFEIi8+CjxwYXRoIGQ9Ik01NS43MTQzIDE4LjM2NzRMNTguMTYzMyA1LjIwNDA5VjQuMjg1NzJMNTUgNC42NzU5OUw0Mi40NDkgNi4yMjQ1TDQ3LjE1MTcgMTUuMTAyMUw1NS43MTQzIDE4LjM2NzRaIiBmaWxsPSIjRjdBRDM3Ii8+CjxwYXRoIGQ9Ik01OC4xNjMzIDQuMjg1NzJMNTguNzc1NSAwLjIwNDA4Mkw1Ni4wMjA0IDEuMjIwMDNMNTUgNC42NzU5OUw1OC4xNjMzIDQuMjg1NzJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTYuMDIwNCAxLjIyMDAzTDQyLjQ0OSA2LjIyNDVMNTUgNC42NzU5OUw1Ni4wMjA0IDEuMjIwMDNaIiBmaWxsPSIjREM3NjAyIi8+CjxwYXRoIGQ9Ik01Mi40NDkgMjUuMzA2MUw1NS43MTQzIDE4LjM2NzRMNDcuMTUxNyAxNS4xMDIxTDUyLjQ0OSAyNS4zMDYxWiIgZmlsbD0iI0Y4ODQyRSIvPgo8cGF0aCBkPSJNNjAgMjUuNTEwMkw1NS43MTQzIDE4LjM2NzRMNTIuNDQ5IDI1LjMwNjFMNjAgMjUuNTEwMloiIGZpbGw9IiNCQjRCMUYiLz4KPHBhdGggZD0iTTUyLjk1OTIgMzUuODE2NEw2MCAyNS41MTAyTDUyLjQ0OSAyNS4zMDYxTDUyLjk1OTIgMzUuODE2NFoiIGZpbGw9IiM3NjAwMTEiLz4KPHBhdGggZD0iTTUyLjk1OTIgMzUuODE2NEw1Mi40NDkgMjUuMzA2MUw0OC40Njk0IDMxLjgzNDJMNDQuODk4IDM3LjY5MjdMNTIuOTU5MiAzNS44MTY0WiIgZmlsbD0iI0JBNDgxRCIvPgo8cGF0aCBkPSJNNDguNDY5NCAzMS44MzQyTDUyLjQ0OSAyNS4zMDYxTDQ0LjA4MTYgMTkuNTkxOUw0OC40Njk0IDMxLjgzNDJaIiBmaWxsPSIjREI3NTAxIi8+CjxwYXRoIGQ9Ik00MS4xMjI0IDM4LjU3MTVMNDQuODk4IDM3LjY5MjdMNDguNDY5NCAzMS44MzQyTDQ0Ljc5NTkgMzUuMjAyOEw0MS4xMjI0IDM4LjU3MTVaIiBmaWxsPSIjNzUwMDEwIi8+CjxwYXRoIGQ9Ik00MS4xMjI0IDM4LjU3MTVMNDQuNzk1OSAzNS4yMDI4TDQ4LjQ2OTQgMzEuODM0Mkw0Mi4zNDY5IDI5LjA4MTdMNDEuMTIyNCAzOC41NzE1WiIgZmlsbD0iI0Q5NzUwMSIvPgo8cGF0aCBkPSJNNDAuNjEyMiAyNC42OTM5TDQyLjM0NjkgMjkuMDgxN0w0OC40Njk0IDMxLjgzNDJMNDQuMDgxNiAxOS41OTE5TDM1LjQ3IDEzLjc3NTVMMzAgMTkuNjkzOUwzNi4wMjA0IDI1LjYxMjNMNDAuNjEyMiAyNC42OTM5WiIgZmlsbD0iI0Y3ODMyRCIvPgo8cGF0aCBkPSJNNDEuMTIyNCAzOC41NzE1TDQyLjM0NjkgMjkuMDgxN0w0MC42MTIyIDI0LjY5MzlMMzkuMDgxNiAyOC41NzE1TDQxLjEyMjQgMzguNTcxNVoiIGZpbGw9IiNCOTRBMUUiLz4KPHBhdGggZD0iTTQxLjEyMjQgMzguNTcxNUwzOS4wODE2IDI4LjU3MTVMMzMuOTc5NiAyOS44OThMMzYuNjY4NyAzMy4xNjMzTDQxLjEyMjQgMzguNTcxNVoiIGZpbGw9IiNCQTQ5MUIiLz4KPHBhdGggZD0iTTMzLjk3OTYgMjkuODk4TDM2LjAyMDQgMjUuNjEyM0wzMCAxOS42OTM5TDMzLjk3OTYgMjkuODk4WiIgZmlsbD0iIzlENzU3NSIvPgo8cGF0aCBkPSJNMzAgMzQuMjg1N0wzMy43NzU1IDM2LjgzNjhMMzYuNjY4NyAzMy4xNjMzTDMzLjk3OTYgMjkuODk4TDMwIDM0LjI4NTdaIiBmaWxsPSIjRjY4NDJEIi8+CjxwYXRoIGQ9Ik0zNy4wNDA4IDM3LjY5MjdMNDEuMTIyNCAzOC41NzE1TDM2LjY2ODcgMzMuMTYzM0wzMy43NzU1IDM2LjgzNjhMMzcuMDQwOCAzNy42OTI3WiIgZmlsbD0iI0Q5NzUwMyIvPgo8cGF0aCBkPSJNMzMuNzc1NSA0NUw0MS4xMjI0IDM4LjU3MTVMMzcuMDQwOCAzNy42OTI3TDMzLjc3NTUgNDVaIiBmaWxsPSIjQkI0QTFDIi8+CjxwYXRoIGQ9Ik0zMy43NzU1IDQ1TDM3LjA0MDggMzcuNjkyN0wzMy43NzU1IDM2LjgzNjhWNDAuMTAyMVY0NVoiIGZpbGw9IiNGNzgzMkYiLz4KPHBhdGggZD0iTTI2LjIyNDUgNDUuMTAyMUwzMCA0Ni44MzY4SDMwLjIwNDFMMzMuNzc1NSA0NVY0MC4xMDIxTDMwIDQyLjY1MzFMMjYuMjI0NSA0MC4xMDIxVjQ1LjEwMjFaIiBmaWxsPSIjQkI0OTFFIi8+CjxwYXRoIGQ9Ik0zMy43NzU1IDM2LjgzNjhMMzAgNDAuMjA0MUwyNi4yMjQ1IDM2LjgzNjhWNDAuMTAyMUwzMCA0Mi42NTMxTDMzLjc3NTUgNDAuMTAyMVYzNi44MzY4WiIgZmlsbD0iIzczMDIxMCIvPgo8cGF0aCBkPSJNMjYuMjI0NSAzNi44MzY4TDMwIDM0LjI4NTdMMjYuMDIwNCAyOS44OThMMjMuMjY1MyAzMy4xNjMzTDI2LjIyNDUgMzYuODM2OFoiIGZpbGw9IiNGNjg0MkQiLz4KPHBhdGggZD0iTTI2LjAyMDQgMjkuODk4TDMwIDE5LjY5MzlMMjMuODc3NiAyNS44MTYzTDI2LjAyMDQgMjkuODk4WiIgZmlsbD0iIzc4MDAxMSIvPgo8cGF0aCBkPSJNMzYuMjI0NSAzLjA2MTIzTDMwLjEwMiAwLjYxMjI0NUwyMy43NzU1IDMuMDgzNTVMMjYuODg3OCAxMS4zODg3TDMwIDE5LjY5MzlMMzYuMjI0NSAzLjA2MTIzWiIgZmlsbD0iIzc1MDExMSIvPgo8cGF0aCBkPSJNMjYuMDIwNCAyOS44OThMMzAgMzQuMjg1N0wzMy45Nzk2IDI5Ljg5OEwzMCAxOS42OTM5TDI2LjAyMDQgMjkuODk4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                    ></div>
                  </div>
                  <canvas className="draw"></canvas>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <WebLayoutsLandingList />
              {/* 1st level: hover */}
              <Dropdown title="Support">
                {/* 2nd level: hover */}
                <Fragment>
                  <Link href="/contact">
                    <li className="font-semibold text-sm text-slate-300 hover:text-purple-600 flex items-center gap-2 py-2 px-4 leading-tight cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
                        />
                      </svg>
                      <p className="">Contact us</p>
                    </li>
                  </Link>
                  <Link href="/help">
                    <li className="font-semibold text-sm text-slate-300 hover:text-purple-600 flex gap-2 items-center py-2 px-4 leading-tight cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20,10.35,14.22,2.94A3.06,3.06,0,0,0,9.75,3L4,10.35A3.05,3.05,0,0,0,3.51,12,3.09,3.09,0,0,0,4,13.58l.06.07,5.74,7.41A3,3,0,0,0,12,22a3.06,3.06,0,0,0,2.26-1L20,13.65a3,3,0,0,0-.06-3.3Zm-1.57,2.14-5.67,7.22a1.11,1.11,0,0,1-1.42.07L5.65,12.47A1,1,0,0,1,5.51,12a1.11,1.11,0,0,1,.1-.45l5.67-7.22a1.11,1.11,0,0,1,1.42-.07l5.63,7.28a1,1,0,0,1,.16.54A1.11,1.11,0,0,1,18.39,12.49Z"
                        />
                      </svg>
                      <p className="">Help center</p>
                    </li>
                  </Link>
                  <Link href="/docs">
                    <li className="font-semibold text-sm text-slate-300 hover:text-purple-600 flex items-center gap-2 py-2 px-4 leading-tight cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M15,16H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm6,2H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4.71,3.29a1,1,0,0,0-.33-.21.92.92,0,0,0-.76,0,1,1,0,0,0-.33.21,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,.21,1.09A1,1,0,0,0,19,17a1,1,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1.15,1.15,0,0,0,19.71,15.29ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3h8a1,1,0,0,0,0-2H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9S20,9,20,8.94ZM15,8a1,1,0,0,1-1-1V5.41L16.59,8Zm4,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,19,18Z"
                        />
                      </svg>
                      <p className="">Documentation</p>
                    </li>
                  </Link>
                  <Link href="/tutorials">
                    <li className="font-semibold text-sm text-slate-300 hover:text-purple-600 flex items-center gap-2 py-2 px-4 leading-tight cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22,11.05c0-.11,0-.22,0-.33l-.09-.6-.09-.39c0-.17-.08-.34-.13-.51s-.08-.27-.13-.4a2.17,2.17,0,0,1-.07-.24s0,0,0-.05a10.1,10.1,0,0,0-5.9-5.9s0,0-.05,0l-.23-.07-.42-.13c-.15,0-.31-.08-.46-.12l-.46-.1-.46-.07c-.16,0-.31,0-.48-.06s-.35,0-.52,0L12,2l-.39,0c-.17,0-.35,0-.52,0s-.32,0-.48.06l-.46.07-.46.1c-.15,0-.31.07-.46.12l-.42.13-.23.07s0,0-.05,0a10.1,10.1,0,0,0-5.9,5.9s0,0,0,.05a2.17,2.17,0,0,1-.07.24c0,.13-.09.26-.13.4s-.09.34-.13.51l-.09.39-.09.6c0,.11,0,.22,0,.33,0,.31,0,.63,0,.95s0,.64,0,.95c0,.11,0,.22,0,.33l.09.6.09.39c0,.17.08.34.13.51s.08.27.13.4a2.17,2.17,0,0,1,.07.24.43.43,0,0,1,0,.07,10,10,0,0,0,5.89,5.88s0,0,.05,0l.24.07.4.13.51.13.39.09.6.09.33,0c.31,0,.63.05.95.05s.64,0,.95-.05l.33,0,.6-.09.39-.09.51-.13.4-.13.24-.07s0,0,.05,0a10,10,0,0,0,5.89-5.88.43.43,0,0,1,0-.07c0-.08.05-.16.07-.24s.09-.26.13-.4.09-.34.13-.51l.09-.39.09-.6c0-.11,0-.22,0-.33,0-.31.05-.63.05-.95S22,11.36,22,11.05Zm-6.3-6.16a8,8,0,0,1,3.46,3.46l-2.86,1a5.14,5.14,0,0,0-1.64-1.64Zm-5.36-.7c.21-.05.41-.08.61-.11l.24,0a8.24,8.24,0,0,1,1.72,0l.24,0c.2,0,.4.06.61.11h.06l-1,2.86A4.49,4.49,0,0,0,12,7a4.4,4.4,0,0,0-.73.06l-1-2.86Zm-1.94.7,1,2.86A5.14,5.14,0,0,0,7.75,9.39l-2.86-1A8,8,0,0,1,8.35,4.89ZM4.19,13.71a4.17,4.17,0,0,1-.1-.6c0-.09,0-.17,0-.25a7.42,7.42,0,0,1,0-1.72c0-.08,0-.16,0-.25a4.17,4.17,0,0,1,.1-.6s0,0,0-.06l2.86,1a4.47,4.47,0,0,0,0,1.46l-2.86,1S4.19,13.73,4.19,13.71Zm4.16,5.4a8,8,0,0,1-3.46-3.46l2.86-1a5.14,5.14,0,0,0,1.64,1.64Zm5.36.7c-.21.05-.41.08-.61.11l-.24,0a8.24,8.24,0,0,1-1.72,0l-.24,0c-.2,0-.4-.06-.61-.11h-.06l1-2.86a4.47,4.47,0,0,0,1.46,0l1,2.86Zm-.67-5h0c-.17.06-.34.1-.5.14a2.73,2.73,0,0,1-1,0c-.16,0-.33-.08-.5-.14h0A3,3,0,0,1,9.2,13v0a3.23,3.23,0,0,1-.14-.51,2.63,2.63,0,0,1,0-1A3.23,3.23,0,0,1,9.19,11v0A3,3,0,0,1,11,9.2h0c.17-.06.34-.1.5-.14a2.73,2.73,0,0,1,1,0c.16,0,.33.08.5.14h0A3,3,0,0,1,14.8,11v0a3.23,3.23,0,0,1,.14.51,2.63,2.63,0,0,1,0,1,3.23,3.23,0,0,1-.14.51v0A3,3,0,0,1,13,14.8Zm2.61,4.31-1-2.86a5.14,5.14,0,0,0,1.64-1.64l2.86,1A8,8,0,0,1,15.65,19.11ZM20,12.86c0,.08,0,.16,0,.25a4.17,4.17,0,0,1-.1.6s0,0,0,.06l-2.86-1a4.47,4.47,0,0,0,0-1.46l2.86-1s0,0,0,.06a4.17,4.17,0,0,1,.1.6c0,.09,0,.17,0,.25a7.42,7.42,0,0,1,0,1.72Z"
                        />
                      </svg>
                      <p className="">Tutorials</p>
                    </li>
                  </Link>
                </Fragment>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex gap-3 grow justify-end flex-wrap items-center">
              <Link href="/signin">
                <li className="font-medium text-purple-600 hover:bg-slate-700 hover:backdrop-blur-sm btn-sm rounded-lg hover:text-gray-200 flex items-center backdrop-blur-sm opacity-70 transition duration-150 ease-in-out cursor-pointer">
                  Sign in
                </li>
              </Link>
              <Link href="/signup">
                <li className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded-lg cursor-pointer">
                  Sign up
                </li>
              </Link>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? {
                      maxHeight: mobileNav.current.scrollHeight,
                      opacity: 1,
                    }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-slate-800 px-4 py-2">
                <li
                  className="flex text-gray-300 hover:text-gray-200 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Link href="/features">Features</Link>
                </li>
                <li
                  className="flex text-gray-300 hover:text-gray-200 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li
                  className="flex text-gray-300 hover:text-gray-200 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Link href="/blog">Blog</Link>
                </li>
                <li
                  className="flex text-gray-300 hover:text-gray-200 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Link href="/about">About us</Link>
                </li>
                <li className="py-2 my-2 border-t border-b border-slate-700">
                  <span className="flex text-gray-300 py-2">Support</span>
                  <ul className="pl-4">
                    <Link href="/contact">
                      <li
                        className="text-sm flex font-medium text-slate-300 hover:text-gray-200 py-2 cursor-pointer"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        Contact us
                      </li>
                    </Link>
                    <Link href="/help">
                      <li
                        className="text-sm flex font-medium text-slate-300 hover:text-gray-200 py-2 cursor-pointer"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        Help center
                      </li>
                    </Link>
                    <Link href="/tutorials">
                      <li
                        className="text-sm flex font-medium text-slate-300 hover:text-gray-200 py-2 cursor-pointer"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        Tutorials
                      </li>
                    </Link>
                  </ul>
                </li>
                <Link href="/signin">
                  <li
                    className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center cursor-pointer"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Sign in
                  </li>
                </Link>
                <Link href="/signup">
                  <li
                    className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-pointer"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Sign up
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default WebLayoutsLandingHeader;
