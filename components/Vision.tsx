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

  const calculateCardTransforms = () => {
    if (isMobile) return [{}, {}, {}];

    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    return [
      { transform: `translateX(${-30 * scrollProgress}%)` },
      { transform: `translateX(0)` },
      { transform: `translateX(${30 * scrollProgress}%)` }
    ];
  };

  const cardTransforms = calculateCardTransforms();

  return (
    <div ref={containerRef} className="parallax-content relative h-full">
      <div className="sticky top-0 h-screen w-full perspective overflow-hidden">
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 overflow-y-auto">
          <div
            ref={textContentRef}
            className={`relative text-center max-w-6xl mx-auto py-8 sm:py-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Header and Subheader */}
            <h1 className="font-display text-h2 font-bold mb-4 tracking-tight text-black">
              Phones do not belong in the classrooms.
              <span className="block italic font-body font-medium text-black mt-2 text-h3">
                But banning them is not the solution.
              </span>
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 relative">
              {/* Card 1 */}
              <div 
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-700"
                style={cardTransforms[0]}
              >
                {/* Image Section */}
                <div className="relative p-4 m-4 rounded-xl border border-gray-100">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="/iceberg1.png"
                      alt="Classroom"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-h3 font-display font-semibold text-left">
                      Phones do not belong in the classrooms
                    </h3>
                  </div>
                </div>
                {/* Text Section */}
                <div className="p-6 m-4 rounded-xl border border-gray-100">
                  <p className="text-black text-body font-body text-left">
                    72% of all school teachers say cell phone distraction is a major issue in the classroom
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-700"
                style={cardTransforms[1]}
              >
                {/* Image Section */}
                <div className="relative p-4 m-4 rounded-xl border border-gray-100">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="/iceberg2.png"
                      alt="Teacher"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-h3 font-display font-semibold text-left">
                      But, banning them is not enough
                    </h3>
                  </div>
                </div>
                {/* Text Section */}
                <div className="p-6 m-4 rounded-xl border border-gray-100">
                  <p className="text-black text-body font-body text-left">
                    Phones not only act as critical communication devices to parent for student safety but also aid in accelerated learning
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-700"
                style={cardTransforms[2]}
              >
                {/* Image Section */}
                <div className="relative p-4 m-4 rounded-xl border border-gray-100">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="/iceberg1.png"
                      alt="Student"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-h3 font-display font-semibold text-left">
                      Schools around the world are taking action
                    </h3>
                  </div>
                </div>
                {/* Text Section */}
                <div className="p-6 m-4 rounded-xl border border-gray-100">
                  <p className="text-black text-body font-body text-left">
                    Responsible phone usage policies can enable growth in increasingly digital environments while ensuring distraction-free learning
                  </p>
                </div>
              </div>
            </div>
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
