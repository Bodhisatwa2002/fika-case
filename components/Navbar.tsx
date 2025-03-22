'use client'
import React, { useState, useEffect } from "react";
import  Link  from "next/link";
import BurgerMenu from "./BurgerMenu";
import LogoIcon from "./icons/LogoIcon";
import AnimatedLink from "@/components/ui/AnimatedLink";

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
        <div className="relative">
          {/* Desktop Navigation */}
          <ul className="desktop-nav hidden md:flex space-x-8 items-center">
            <li>
              <AnimatedLink to="/about-us" text="About Us" />
            </li>
            <li>
              <AnimatedLink to="/how-it-works" text="How It Works" />
            </li>
            <li>
              <AnimatedLink to="/why-it-matters" text="Why It Matters" />
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
