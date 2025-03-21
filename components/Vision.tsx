"use client";
import React, { useEffect, useRef, useState } from "react";
import Mountain from "@/components/Mountain";

const Vision: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      if (containerRef.current && !isMobile) {
        setScrollY(window.scrollY);
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize();

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (textContentRef.current) {
      observer.observe(textContentRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (textContentRef.current) {
        observer.unobserve(textContentRef.current);
      }
    };
  }, [isMobile]);

  const calculateLeftTransform = () => {
    if (isMobile) return {}; 

    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    const translateX = -30 * scrollProgress;
    const rotateY = 15 * scrollProgress;
    return { transform: `translateX(${translateX}%) rotateY(${rotateY}deg)` };
  };

  const calculateRightTransform = () => {
    if (isMobile) return {}; 

    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    const translateX = 30 * scrollProgress;
    const rotateY = -15 * scrollProgress;
    return { transform: `translateX(${translateX}%) rotateY(${rotateY}deg)` };
  };

  return (
    <div ref={containerRef} className="parallax-content relative h-full">
      <div className="sticky top-0 h-screen w-full perspective overflow-hidden">
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 overflow-y-auto">
          <div
            ref={textContentRef}
            className={`relative text-center max-w-3xl mx-auto py-8 sm:py-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-black">
              Phones do not belong in the classrooms.
              <span className="block italic font-medium text-black mt-2">
                But banning them is not the solution.
              </span>
            </h1>
            <p className="text-base sm:text-lg mt-6 text-black">
              According to a 2024 Pew Research study, 72% of high school
              teachers say cell phone distraction is a major problem in the
              classroom. But banning phones is simply not enough, because they
              also enable accelerated learning, provide access to digital
              content, and act as a critical communication tool to parents for
              student safety.
            </p>
            <p className="text-base sm:text-lg mt-4 sm:mt-6 text-black">
              Schools around the world are taking action to enable responsible
              phone usage policies that enable growth in increasing digital
              environments while ensuring distraction-free learning
            </p>
          </div>
          <div
            className={`mb-8 sm:mb-0 transition-opacity duration-1000 ease-in-out delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#"
              title=""
              className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-4 font-semibold text-black transition-all duration-200 bg-[#FF9900] rounded-full mt-4 sm:mt-6 hover:bg-[#ff9900cd] focus:bg-yellow-400"
              role="button"
            >
              Dive into Research
            </a>
          </div>
        </div>

        {/* Mountains container with 3D perspective */}
        <div
          className={`mountain-container ${
            !isMobile ? "perspective preserve-3d" : ""
          }`}
        >
          {/* Left mountain */}
          <Mountain
            side="left"
            imgSrc="/iceberg1.png"
            style={calculateLeftTransform()}
          />

          {/* Right mountain */}
          <Mountain
            side="right"
            imgSrc="/iceberg2.png"
            style={calculateRightTransform()}
          />
        </div>

        {/* Background */}
        <div className="absolute inset-0 bg-navy-dark z-[-1]"></div>
      </div>
    </div>
  );
};

export default Vision;
