"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import GlowLink from "@/components/ui/GlowLink";

// Add this CSS to your global styles or create a separate CSS module
const buttonStyles = `
  .glow-button {
    position: relative;
    z-index: 0;
    cursor: pointer;
    border-radius: 9999px;
    background: white;
    color: black;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
      font-weight: bold;

  }

  .glow-button.loaded:hover {
    transform: scale(1.05);
    transition: transform 0.1s ease-in-out;
  }

  .glow-button::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    border-radius: 9999px;
  }

  .glow-button.loaded:hover::before {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .glow-button::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 9999px;
  }

  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  }
`;

export default function Navbar() {
  // Properly type the ref as HTMLButtonElement
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Add a loaded class after component mounts
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("loaded");
    }
  }, []);

  return (
    <>
      <style jsx global>
        {buttonStyles}
      </style>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ease-in-out bg-transparent">
        <div>
          <Link href="/" className="logo">
            <img
              src="logo.png"
              alt="Logo"
              className="h-8 w-auto filter brightness-100"
            />
          </Link>
        </div>
        <div>
          <div className="relative">
            {/* Desktop Navigation */}
            <ul className="desktop-nav hidden md:flex space-x-8 items-center text-white font-bold">
              <li>
                <GlowLink to="/about-us" text="About Us" />
              </li>
              <li>
                <GlowLink to="/how-it-works" text="How It Works" />
              </li>
              <li>
                <GlowLink to="/why-it-matters" text="Why It Matters" />
              </li>
              <li>
                <Link href="/contact-us">
                  <button
                    ref={buttonRef}
                    className="glow-button hidden md:flex"
                  >
                    Get in Touch
                  </button>
                </Link>
              </li>
              <li className="hidden md:block">
                <BurgerMenu className="text-white" />
              </li>
            </ul>

            {/* Mobile BurgerMenu */}
            <div className="md:hidden">
              <BurgerMenu className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
