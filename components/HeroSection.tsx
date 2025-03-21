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
      className="w-full  min-h-screen overflow-hidden relative opacity-0 transition-opacity duration-1000"
      style={{
        background: "url('/bg-hero1.avif') center/cover no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
          <div
            ref={tagRef}
            className="inline-flex items-center px-3 py-1 rounded-full tag-label mb-6 opacity-0 transform translate-y-4 transition-all duration-700"
          ></div>

          <div
            ref={textRef}
            className="opacity-0 transform translate-y-8 transition-all duration-700"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              Education beyond
              <br />
              distractions
            </h1>
            <p className="text-xl text-black/90 mb-8 max-w-md">
              Phone-free classrooms for elevated learning{" "}
            </p>
          </div>

            <a href="/contact-us">
              <button
                ref={buttonRef}
                className="cursor-pointer bg-white rounded-full px-6 py-3 text-black font-medium flex items-center opacity-0 transform translate-y-4 transition-all duration-700 button-animation"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className="relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-700 animate-fade-in"
            style={{
              maxHeight: "550px",
              background: "#111",
              borderRadius: "16px",
            }}
          >
            <img
              src="https://preview--pulse-robot-landing.lovable.app/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
              alt="Atlas Robot"
              className="w-full h-full object-cover"
              loading="lazy"
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 1s ease" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
