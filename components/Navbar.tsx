"use client";

import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import LogoIcon from "./icons/LogoIcon";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white ">
      <div>
        <Link href="#home" className="logo">
          <LogoIcon />
        </Link>
      </div>
      <div>
        <div className="menu relative">
          {/* Desktop Navigation */}
          <ul className="desktop-nav hidden md:flex space-x-6 items-center">
            <li>
              <Link
                href=""
                title="Go to About Us "
                className="group relative overflow-hidden block"
              >
                <span className="flex transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>A</span>
                  <span>b</span>
                  <span>o</span>
                  <span>u</span>
                  <span>t</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>U</span>
                  <span>s</span>
                </span>
                <span className="flex absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>A</span>
                  <span>b</span>
                  <span>o</span>
                  <span>u</span>
                  <span>t</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>U</span>
                  <span>s</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                title="Go to How it Works"
                className="group relative overflow-hidden block"
              >
                <span className="flex transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>H</span>
                  <span>o</span>
                  <span>w</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>W</span>
                  <span>o</span>
                  <span>r</span>
                  <span>k</span>
                  <span>s</span>
                </span>
                <span className="flex absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>H</span>
                  <span>o</span>
                  <span>w</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>W</span>
                  <span>o</span>
                  <span>r</span>
                  <span>k</span>
                  <span>s</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                title="Go to How it Works"
                className="group relative overflow-hidden block"
              >
                <span className="flex transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>W</span>
                  <span>h</span>
                  <span>y</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>M</span>
                  <span>a</span>
                  <span>t</span>
                  <span>t</span>
                  <span>e</span>
                  <span>r</span>
                  <span>s</span>
                </span>
                <span className="flex absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>W</span>
                  <span>h</span>
                  <span>y</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span> {/* Space added */}
                  <span>M</span>
                  <span>a</span>
                  <span>t</span>
                  <span>t</span>
                  <span>e</span>
                  <span>r</span>
                  <span>s</span>
                </span>
              </Link>
            </li>
            {/* BurgerMenu for Desktop */}
            <li className="hidden md:block mr-10">
              <BurgerMenu />
            </li>
          </ul>

          {/* Mobile BurgerMenu */}
          <div className="md:hidden">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
