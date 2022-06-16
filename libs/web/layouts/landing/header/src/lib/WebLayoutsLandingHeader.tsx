import React, { useState, useRef, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { WebLayoutsLandingList } from '@nuldrive/web-util-list';
import { Dropdown } from '@nuldrive/web/layouts/landing/header';

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

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-slate-900 backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className="block">
              <Link href="/" aria-label="Cruip">
                <div className="">
                  <div className="slides">
                    <div
                      id="first-slide"
                      className="slide"
                      data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTAyIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy4yODU3MSAyLjA4MTYzTDEuNzM0NjkgMEwzLjEyMjQ1IDcuNjMyNjZMOC41IDguMjYxMkw3LjI4NTcxIDIuMDgxNjNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjkuODM2NyAxMC43NTUxTDcuMjg1NzEgMi4wODE2M0w4LjUgOC4yNjEyTDI5LjgzNjcgMTAuNzU1MVoiIGZpbGw9IiNEQzc2MDIiLz4KPHBhdGggZD0iTTMuMTIyNDUgNy42MzI2Nkw3LjYzMjY1IDMxLjIyNDVMMjEuODU3MSAyNS42NjY1TDI5LjgzNjcgMTAuNzU1MUw4LjUgOC4yNjEyTDMuMTIyNDUgNy42MzI2NloiIGZpbGw9IiNGN0FEMzciLz4KPHBhdGggZD0iTTcuNjMyNjUgMzEuMjI0NUwxMi42NjMzIDQyLjg0N0wyMS44NTcxIDI1LjY2NjVMNy42MzI2NSAzMS4yMjQ1WiIgZmlsbD0iI0Y4ODQyRSIvPgo8cGF0aCBkPSJNNy42MzI2NSAzMS4yMjQ1TDAgNDMuMzY3NEwxMi42NjMzIDQyLjg0N0w3LjYzMjY1IDMxLjIyNDVaIiBmaWxsPSIjQkI0QjFGIi8+CjxwYXRoIGQ9Ik0wIDQzLjM2NzRMMTIuMTQyOSA2MC44ODc4TDEyLjY2MzMgNDIuODQ3TDAgNDMuMzY3NFoiIGZpbGw9IiM3NjAwMTEiLz4KPHBhdGggZD0iTTEyLjY2MzMgNDIuODQ3TDE5Ljc3NTUgNTMuOTQ5TDI3LjkyODYgMzIuNzg1N0wxMi42NjMzIDQyLjg0N1oiIGZpbGw9IiNEQjc1MDEiLz4KPHBhdGggZD0iTTQxLjYzMjcgMjMuNDE4NEwyOS44MzY3IDEwLjc1NTFMMjEuODU3MSAyNS42NjY1TDEyLjY2MzMgNDIuODQ3TDI3LjkyODYgMzIuNzg1N0w0MS42MzI3IDIzLjQxODRaIiBmaWxsPSIjQkQ0OTFFIi8+CjxwYXRoIGQ9Ik00MC4wNzE0IDUuMzc3NTVMMjkuODM2NyAxMC43NTUxTDQxLjYzMjcgMjMuNDE4NEw0MC40MTg0IDUuMjQyMDNMNDAuMDcxNCA1LjM3NzU1WiIgZmlsbD0iI0Y4ODUyQyIvPgo8cGF0aCBkPSJNNTEgMzMuNDc5Nkw0MS42MzI3IDIzLjQxODRMMjcuOTI4NiAzMi43ODU3TDE5Ljc3NTUgNTMuOTQ5TDMwLjAxMDIgNDkuNjEyM0wzMy40Nzk2IDQxLjgwNjJMNDAuNTkxOCA0My44ODc4TDUxIDMzLjQ3OTZaIiBmaWxsPSIjRjc4MzJEIi8+CjxwYXRoIGQ9Ik00MC40MTg0IDUuMjQyMDNMNDEuNjMyNyAyMy40MTg0TDUxIDMzLjQ3OTZMNDUuNzA5MiAxOS4zNjA4TDQwLjQxODQgNS4yNDIwM1oiIGZpbGw9IiNCQjQ5MjAiLz4KPHBhdGggZD0iTTEyLjY2MzMgNDIuODQ3TDEyLjE0MjkgNjAuODg3OEwyNi4wMjA0IDY0LjE0NkwxOS43NzU1IDUzLjk0OUwxMi42NjMzIDQyLjg0N1oiIGZpbGw9IiNCQTQ4MUQiLz4KPHBhdGggZD0iTTMyLjA5MTggNjUuNTcxNUwzMC4wMTAyIDQ5LjYxMjNMMTkuNzc1NSA1My45NDlMMzIuMDkxOCA2NS41NzE1WiIgZmlsbD0iI0Q5NzUwMSIvPgo8cGF0aCBkPSJNMzIuMDkxOCA2NS41NzE1TDE5Ljc3NTUgNTMuOTQ5TDI2LjAyMDQgNjQuMTQ2TDMyLjA5MTggNjUuNTcxNVoiIGZpbGw9IiM3NTAwMTAiLz4KPHBhdGggZD0iTTQ0LjIzNDcgNTAuODI2Nkw0MC41OTE4IDQzLjg4NzhMMzMuNDc5NiA0MS44MDYyTDM1LjU2MTIgNDguNTcxNUw0NC4yMzQ3IDUwLjgyNjZaIiBmaWxsPSIjMDgwQTE1Ii8+CjxwYXRoIGQ9Ik02Ni40Mzg4IDQ4LjU3MTVMNjkuMDQwOCA0MS45Nzk2TDYxLjIzNDcgNDMuNTQwOEw1Ny43NjUzIDUwLjgyNjZMNjYuNDM4OCA0OC41NzE1WiIgZmlsbD0iIzA4MEExNSIvPgo8cGF0aCBkPSJNNTEgNTguMjg1OEw0NC41ODE2IDYyLjYyMjVMNTEgNjguMzQ3TDU3LjQxODQgNjIuNjIyNUw1MSA1OC4yODU4WiIgZmlsbD0iIzA4MEExNSIvPgo8cGF0aCBkPSJNMzUuNTYxMiA0OC41NzE1TDMzLjQ3OTYgNDEuODA2MkwzMC4wMTAyIDQ5LjYxMjNMMzIuMDkxOCA2NS41NzE1TDM1LjU2MTIgNDguNTcxNVoiIGZpbGw9IiNCQTQ5MUIiLz4KPHBhdGggZD0iTTMyLjA5MTggNjUuNTcxNUwzOS41NTEgNTYuMzc3Nkw0NC4yMzQ3IDUwLjgyNjZMMzUuNTYxMiA0OC41NzE1TDMyLjA5MTggNjUuNTcxNVoiIGZpbGw9IiM3NzAwMTMiLz4KPHBhdGggZD0iTTMyLjA5MTggNjUuNTcxNUw0NC41ODE2IDc2LjY3MzVMMzkuMDMwNiA2NC4wNzc1TDMyLjA5MTggNjUuNTcxNVoiIGZpbGw9IiNCQjRBMUMiLz4KPHBhdGggZD0iTTQ0LjU4MTYgNzYuNjczNVY2OC4xNzM1VjYyLjYyMjVMMzkuMDMwNiA2NC4wNzc1TDQ0LjU4MTYgNzYuNjczNVoiIGZpbGw9IiNGNzgzMkYiLz4KPHBhdGggZD0iTTMyLjA5MTggNjUuNTcxNUwzOS4wMzA2IDY0LjA3NzVMNDQuNTgxNiA2Mi42MjI1TDM5LjU1MSA1Ni4zNzc2TDMyLjA5MTggNjUuNTcxNVoiIGZpbGw9IiNEOTc1MDMiLz4KPHBhdGggZD0iTTYwLjI5OSAyMy40MTg0TDYxLjU4MTYgNS4yMDQwOUw1MSAzMy40Nzk2TDYwLjI5OSAyMy40MTg0WiIgZmlsbD0iI0JCNDkyMCIvPgo8cGF0aCBkPSJNNzIuMTYzMyAxMC41ODE2TDYxLjU4MTYgNS4yMDQwOUw2MC4yOTkgMjMuNDE4NEw3Mi4xNjMzIDEwLjU4MTZaIiBmaWxsPSIjRjg4NTJDIi8+CjxwYXRoIGQ9Ik03Mi4xNjMzIDEwLjU4MTZMNjAuMjk5IDIzLjQxODRMNzQuOTM4OCAzMy4zMDYxTDg5LjE2MzMgNDMuMDIwNEw4MC4xNTc5IDI1LjY3MzVMNzIuMTYzMyAxMC41ODE2WiIgZmlsbD0iI0I4NDkxRCIvPgo8cGF0aCBkPSJNOTQuNzE0MyAzMS4yMjQ1TDk4Ljg3NzYgOC44NDY5NFY3LjI4NTcyTDkzLjUgNy45NDkxOEw3Mi4xNjMzIDEwLjU4MTZMODAuMTU3OSAyNS42NzM1TDk0LjcxNDMgMzEuMjI0NVoiIGZpbGw9IiNGN0FEMzciLz4KPHBhdGggZD0iTTk4Ljg3NzYgNy4yODU3Mkw5OS45MTg0IDAuMzQ2OTM5TDk1LjIzNDcgMi4wNzQwNEw5My41IDcuOTQ5MThMOTguODc3NiA3LjI4NTcyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTk1LjIzNDcgMi4wNzQwNEw3Mi4xNjMzIDEwLjU4MTZMOTMuNSA3Ljk0OTE4TDk1LjIzNDcgMi4wNzQwNFoiIGZpbGw9IiNEQzc2MDIiLz4KPHBhdGggZD0iTTg5LjE2MzMgNDMuMDIwNEw5NC43MTQzIDMxLjIyNDVMODAuMTU3OSAyNS42NzM1TDg5LjE2MzMgNDMuMDIwNFoiIGZpbGw9IiNGODg0MkUiLz4KPHBhdGggZD0iTTEwMiA0My4zNjc0TDk0LjcxNDMgMzEuMjI0NUw4OS4xNjMzIDQzLjAyMDRMMTAyIDQzLjM2NzRaIiBmaWxsPSIjQkI0QjFGIi8+CjxwYXRoIGQ9Ik05MC4wMzA2IDYwLjg4NzhMMTAyIDQzLjM2NzRMODkuMTYzMyA0My4wMjA0TDkwLjAzMDYgNjAuODg3OFoiIGZpbGw9IiM3NjAwMTEiLz4KPHBhdGggZD0iTTkwLjAzMDYgNjAuODg3OEw4OS4xNjMzIDQzLjAyMDRMODIuMzk4IDU0LjExODFMNzYuMzI2NSA2NC4wNzc1TDkwLjAzMDYgNjAuODg3OFoiIGZpbGw9IiNCQTQ4MUQiLz4KPHBhdGggZD0iTTgyLjM5OCA1NC4xMTgxTDg5LjE2MzMgNDMuMDIwNEw3NC45Mzg4IDMzLjMwNjFMODIuMzk4IDU0LjExODFaIiBmaWxsPSIjREI3NTAxIi8+CjxwYXRoIGQ9Ik02OS45MDgyIDY1LjU3MTVMNzYuMzI2NSA2NC4wNzc1TDgyLjM5OCA1NC4xMTgxTDc2LjE1MzEgNTkuODQ0OEw2OS45MDgyIDY1LjU3MTVaIiBmaWxsPSIjNzUwMDEwIi8+CjxwYXRoIGQ9Ik02OS45MDgyIDY1LjU3MTVMNzYuMTUzMSA1OS44NDQ4TDgyLjM5OCA1NC4xMTgxTDcxLjk4OTggNDkuNDM4OEw2OS45MDgyIDY1LjU3MTVaIiBmaWxsPSIjRDk3NTAxIi8+CjxwYXRoIGQ9Ik02OS4wNDA4IDQxLjk3OTZMNzEuOTg5OCA0OS40Mzg4TDgyLjM5OCA1NC4xMTgxTDc0LjkzODggMzMuMzA2MUw2MC4yOTkgMjMuNDE4NEw1MSAzMy40Nzk2TDYxLjIzNDcgNDMuNTQwOEw2OS4wNDA4IDQxLjk3OTZaIiBmaWxsPSIjRjc4MzJEIi8+CjxwYXRoIGQ9Ik02OS45MDgyIDY1LjU3MTVMNzEuOTg5OCA0OS40Mzg4TDY5LjA0MDggNDEuOTc5Nkw2Ni40Mzg4IDQ4LjU3MTVMNjkuOTA4MiA2NS41NzE1WiIgZmlsbD0iI0I5NEExRSIvPgo8cGF0aCBkPSJNNjkuOTA4MiA2NS41NzE1TDY2LjQzODggNDguNTcxNUw1Ny43NjUzIDUwLjgyNjZMNjIuMzM2NyA1Ni4zNzc2TDY5LjkwODIgNjUuNTcxNVoiIGZpbGw9IiNCQTQ5MUIiLz4KPHBhdGggZD0iTTU3Ljc2NTMgNTAuODI2Nkw2MS4yMzQ3IDQzLjU0MDhMNTEgMzMuNDc5Nkw1Ny43NjUzIDUwLjgyNjZaIiBmaWxsPSIjOUQ3NTc1Ii8+CjxwYXRoIGQ9Ik01MSA1OC4yODU4TDU3LjQxODQgNjIuNjIyNUw2Mi4zMzY3IDU2LjM3NzZMNTcuNzY1MyA1MC44MjY2TDUxIDU4LjI4NThaIiBmaWxsPSIjRjY4NDJEIi8+CjxwYXRoIGQ9Ik02Mi45Njk0IDY0LjA3NzVMNjkuOTA4MiA2NS41NzE1TDYyLjMzNjcgNTYuMzc3Nkw1Ny40MTg0IDYyLjYyMjVMNjIuOTY5NCA2NC4wNzc1WiIgZmlsbD0iI0Q5NzUwMyIvPgo8cGF0aCBkPSJNNTcuNDE4NCA3Ni41MDAxTDY5LjkwODIgNjUuNTcxNUw2Mi45Njk0IDY0LjA3NzVMNTcuNDE4NCA3Ni41MDAxWiIgZmlsbD0iI0JCNEExQyIvPgo8cGF0aCBkPSJNNTcuNDE4NCA3Ni41MDAxTDYyLjk2OTQgNjQuMDc3NUw1Ny40MTg0IDYyLjYyMjVWNjguMTczNVY3Ni41MDAxWiIgZmlsbD0iI0Y3ODMyRiIvPgo8cGF0aCBkPSJNNDQuNTgxNiA3Ni42NzM1TDUxIDc5LjYyMjVINTEuMzQ2OUw1Ny40MTg0IDc2LjUwMDFWNjguMTczNUw1MSA3Mi41MTAzTDQ0LjU4MTYgNjguMTczNVY3Ni42NzM1WiIgZmlsbD0iI0JCNDkxRSIvPgo8cGF0aCBkPSJNNTcuNDE4NCA2Mi42MjI1TDUxIDY4LjM0N0w0NC41ODE2IDYyLjYyMjVWNjguMTczNUw1MSA3Mi41MTAzTDU3LjQxODQgNjguMTczNVY2Mi42MjI1WiIgZmlsbD0iIzczMDIxMCIvPgo8cGF0aCBkPSJNNDQuNTgxNiA2Mi42MjI1TDUxIDU4LjI4NThMNDQuMjM0NyA1MC44MjY2TDM5LjU1MSA1Ni4zNzc2TDQ0LjU4MTYgNjIuNjIyNVoiIGZpbGw9IiNGNjg0MkQiLz4KPHBhdGggZD0iTTQ0LjIzNDcgNTAuODI2Nkw1MSAzMy40Nzk2TDQwLjU5MTggNDMuODg3OEw0NC4yMzQ3IDUwLjgyNjZaIiBmaWxsPSIjNzgwMDExIi8+CjxwYXRoIGQ9Ik02MS41ODE2IDUuMjA0MDlMNTEuMTczNSAxLjA0MDgyTDQwLjQxODQgNS4yNDIwM0w0NS43MDkyIDE5LjM2MDhMNTEgMzMuNDc5Nkw2MS41ODE2IDUuMjA0MDlaIiBmaWxsPSIjNzUwMTExIi8+CjxwYXRoIGQ9Ik00NC4yMzQ3IDUwLjgyNjZMNTEgNTguMjg1OEw1Ny43NjUzIDUwLjgyNjZMNTEgMzMuNDc5Nkw0NC4yMzQ3IDUwLjgyNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
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
