"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const tag = tagRef.current;

    if (hero && text && button && tag) {
      setTimeout(() => {
        hero.style.opacity = "1";
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";
      }, 100);

      setTimeout(() => {
        tag.style.opacity = "1";
        tag.style.transform = "translateY(0)";
      }, 300);

      setTimeout(() => {
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
      }, 500);
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen overflow-hidden relative opacity-0 transition-opacity duration-1000 flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home-bg-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container - Positioned higher with reduced top padding */}
      <div
        className="container relative z-10 px-6 sm:px-8 md:px-12 pt-20 pb-12 md:pb-16 max-w-5xl mx-auto flex flex-col items-center justify-center"
        style={{ marginTop: "-10vh" }}
      >
        <div className="w-full text-center text-white">
          <div
            ref={tagRef}
            className="inline-flex items-center px-2 py-2 rounded-full tag-label mb-6 opacity-0 transform translate-y-4 transition-all duration-700"
          ></div>

          <div
            ref={textRef}
            className="opacity-0 transform translate-y-8 transition-all duration-700 mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Education beyond
              <br />
              distractions
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 md:mb-10 mx-auto max-w-2xl drop-shadow-md">
              Phone-free classrooms for elevated learning
            </p>
          </div>

          <a href="/contact-us">
            <button
              ref={buttonRef}
              className="cursor-pointer bg-white rounded-full px-8 py-4 text-lg md:text-xl text-black font-medium flex items-center opacity-0 transform translate-y-4 transition-all duration-700 button-animation mx-auto"
            >
              Get in Touch <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
