"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import LogoIcon from "./icons/LogoIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg border-b border-white/20"
          : "bg-white"
      }`}
    >
      <div>
        <Link href="/" className="logo">
          <LogoIcon />
        </Link>
      </div>
      <div>
        <div className=" relative">
          {/* Desktop Navigation */}
          <ul className="desktop-nav hidden md:flex space-x-8 items-center">
            <li>
              <Link
                href="/about-us"
                title="Go to About Us"
                className="group relative overflow-hidden block font-extrabold font-stretch-condensed text-lg"
              >
                <span className="flex transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>A</span>
                  <span>b</span>
                  <span>o</span>
                  <span>u</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>U</span>
                  <span>s</span>
                </span>
                <span className="flex text-amber-600 absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>A</span>
                  <span>b</span>
                  <span>o</span>
                  <span>u</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>U</span>
                  <span>s</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                title="Go to How it Works"
                className="group relative overflow-hidden block font-extrabold font-stretch-condensed text-lg"
              >
                <span className="flex transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>H</span>
                  <span>o</span>
                  <span>w</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>W</span>
                  <span>o</span>
                  <span>r</span>
                  <span>k</span>
                  <span>s</span>
                </span>
                <span className="flex text-amber-600  absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>H</span>
                  <span>o</span>
                  <span>w</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span>
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
                href="/why-it-matters"
                title="Go to Why It Matters"
                className="group relative overflow-hidden block font-extrabold font-stretch-condensed text-lg"
              >
                <span className="flex transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>W</span>
                  <span>h</span>
                  <span>y</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>M</span>
                  <span>a</span>
                  <span>t</span>
                  <span>t</span>
                  <span>e</span>
                  <span>r</span>
                  <span>s</span>
                </span>
                <span className="flex text-amber-600  absolute top-full left-0 transition-transform duration-300 transform group-hover:-translate-y-full">
                  <span>W</span>
                  <span>h</span>
                  <span>y</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>t</span>
                  <span>&nbsp;</span>
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
            <li className="hidden md:block">
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
