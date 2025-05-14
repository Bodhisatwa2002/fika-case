"use client";
import React, { useEffect, useRef, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ColourfulText from "./ui/colourful-text";
import { cn, commonClasses } from "@/lib/styles/utils";

const ProductSpec: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonials = [
    {
      quote:
        "Peace of mind knowing phones are safely stored, yet easily accessible when needed",
      name: "Secure & Accessible",
      title: "",
    },
    {
      quote:
        "Durable, water-resistant neoprene construction — lightweight and comfortable",
      name: "Lightweight & Durable",
      title: "",
    },
    {
      quote:
        "Retractable pin for added security, preventing injuries while operating the case",
      name: "Safety First",
      title: "",
    },
    {
      quote: "Blocks distracting signals for truly focused learning",
      name: "Signal Blocking",
      title: "",
    },
    {
      quote: "Convenient name tag slot for easy identification",
      name: "Easy Identification",
      title: "",
    },
    {
      quote: "Fits most smartphones, including larger models up to 6.1 inches",
      name: "Widely Compatible",
      title: "",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.height = `${containerRef.current.clientHeight + 0.1
          }px`;
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.height = "";
          }
        }, 100);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={sectionRef} className={cn(commonClasses.section, "relative min-h-screen")}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="ProdSpecImage.jpg"
          alt="Product"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full">
        <div className="grid grid-cols-1 md:grid-cols-20 min-h-screen">
          {/* Left side - Takes up 35% */}
          <div className="hidden md:block md:col-span-7 w-full h-full"></div>

          {/* Right side - Content takes up 65% */}
          <div className="flex flex-col h-screen pt-0 md:col-span-13">
            {/* Content wrapper with 3-row grid */}
            <div className="grid gap-24 h-full" style={{ gridTemplateRows: '30% 45% 25%' }}>
              {/* Header - Bottom of first row */}
              <div className="flex items-end">
                <div
                  className={cn(
                    "transition-all duration-1000 ease-in-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h1 className={cn(commonClasses.h1, "text-white mb-0 leading-tight")}>
                    An Educator's ally, the 
                    <img
                      src="logoOrange.png"
                      alt="FikaCASE Logo"
                      className="inline h-[1.2em] mx-3 align-middle translate-y-[-8px]"
                    />
                    provides a simple, yet powerful solution
                  </h1>
                </div>
              </div>

              {/* Second row with cards at bottom */}
              <div className="flex items-end">
                <div
                  className={cn(
                    "transition-all duration-1000 ease-in-out w-full",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div
                    ref={containerRef}
                    className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px] w-full"
                  >
                    <div className="h-full rounded-md flex flex-col antialiased bg-white/10 items-center justify-center relative overflow-hidden">
                      <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="normal"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty third row */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
