"use client";
import React, { useEffect, useRef, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ColourfulText from "./ui/colourful-text";

const ProductSpec: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonials = [
    {
      quote:
        "Peace of mind knowing phones are safely stored, yet easily accessible when needed.",
      name: "Secure & Accessible",
      title: "",
    },
    {
      quote:
        "Durable, water-resistant neoprene construction — lightweight and comfortable.",
      name: "Lightweight & Durable",
      title: "",
    },
    {
      quote:
        "Retractable pin for added security, preventing injuries while operating the case.",
      name: "Safety First",
      title: "",
    },
    {
      quote: "Blocks distracting signals for truly focused learning.",
      name: "Signal Blocking",
      title: "",
    },
    {
      quote: "Convenient name tag slot for easy identification.",
      name: "Easy Identification",
      title: "",
    },
    {
      quote: "Fits most smartphones, including larger models up to 6.1 inches.",
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
        containerRef.current.style.height = `${
          containerRef.current.clientHeight + 0.1
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
    <div ref={sectionRef} className="bg-white mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-8">
          {/* Left column - Mobile image - Hidden on mobile */}
          <div
            className={`hidden md:flex md:col-span-2 md:row-span-5 bg-white rounded-3xl shadow-lg p-6 flex-col items-center transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl overflow-hidden w-full h-full flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Product"
                className="w-full h-full object-cover rounded-t-3xl"
              />
              
            </div>
          </div>

          {/* Top right - Heading - Takes full width on mobile */}
          <div
            className={`col-span-1 md:col-span-3 md:row-span-2 flex flex-col justify-center transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              An Educator's ally, the <ColourfulText text="Fika Case " />
              provides a simple, yet powerful solution.
            </h1>
          </div>

          {/* Bottom right - Infinite Moving Cards - Takes full width on mobile */}
          <div
            className={`col-span-1 md:col-span-3 md:row-span-3 flex flex-col transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div
              ref={containerRef}
              className="min-h-[300px] sm:min-h-[350px] md:h-64 w-full"
            >
              <div className="h-full rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                  items={testimonials}
                  direction="left"
                  speed="normal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
