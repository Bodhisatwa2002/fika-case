"use client";
import React, { useEffect, useRef, useState } from "react";
import Mountain from "@/components/Mountain";

const Vision: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(window.scrollY);
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate mountain slide transforms based on scroll position
  const calculateLeftTransform = () => {
    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    const translateX = -30 * scrollProgress;
    const rotateY = 15 * scrollProgress;
    return { transform: `translateX(${translateX}%) rotateY(${rotateY}deg)` };
  };

  const calculateRightTransform = () => {
    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    const translateX = 30 * scrollProgress;
    const rotateY = -15 * scrollProgress;
    return { transform: `translateX(${translateX}%) rotateY(${rotateY}deg)` };
  };

  return (
    <div ref={containerRef} className="parallax-content relative h-full">
      <div className="sticky top-0 h-screen w-full perspective overflow-hidden">
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <div className="relative text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-5xl font-bold mb-4 tracking-tight text-black">
              Phones do not belong in the classrooms.
              <span className="block italic font-medium text-black">
                But banning them is not the solution.
              </span>
            </h1>
            <p className="text-lg mt-8 text-black">
              According to a 2024 Pew Research study, 72% of high school
              teachers say cell phone distraction is a major problem in the
              classroom. But banning phones is simply not enough, because they
              also enable accelerated learning, provide access to digital
              content, and act as a critical communication tool to parents for
              student safety.
            </p>
            <p className="text-lg mt-6 text-black">
              Schools around the world are taking action to enable responsible
              phone usage policies that enable growth in increasing digital
              environments while ensuring distraction-free learning
            </p>
          </div>
          <div className="">
            <a
              href="#"
              title=""
              className="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-[#FF9900] rounded-full mt-6 hover:bg-[#ff9900cd] focus:bg-yellow-400"
              role="button"
            >
              Dive into Research
            </a>
          </div>
        </div>

        {/* Mountains container with 3D perspective */}
        <div className="mountain-container perspective preserve-3d">
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
