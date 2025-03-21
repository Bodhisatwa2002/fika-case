"use client";
import React, { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ColourfulText from "./ui/colourful-text";

const ProductSpec: React.FC = () => {
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

  // Create a ref for the content container
  const containerRef = useRef<HTMLDivElement>(null);

  // This effect ensures the InfiniteMovingCards component is properly initialized
  useEffect(() => {
    // Give the component time to render before checking
    const timer = setTimeout(() => {
      // Force a re-render by adjusting the container's height slightly
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
    <div className="bg-white  mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-8">
          {/* Left column - Mobile image - Hidden on mobile */}
          <div className="hidden md:flex md:col-span-2 md:row-span-5 bg-white rounded-3xl shadow-lg p-6 flex-col items-center">
            <div className="bg-white rounded-3xl overflow-hidden w-full h-full flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Product"
                className="w-full h-4/5 object-cover rounded-t-3xl"
              />
              <div className="p-4">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                  WE EXAMINE
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  An Educator's ally, the Fika Case provides a simple, yet
                  powerful solution.
                </h3>
                <p className="text-gray-700">
                  How does the Fika Case transform classroom management?
                </p>
              </div>
            </div>
          </div>

          {/* Top right - Heading - Takes full width on mobile */}
          <div className="col-span-1 md:col-span-3 md:row-span-2 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              An Educator's ally, the <ColourfulText text="Fika Case " />
              provides a simple, yet powerful solution.
            </h1>
          </div>

          {/* Bottom right - Infinite Moving Cards - Takes full width on mobile */}
          <div className="col-span-1 md:col-span-3 md:row-span-3 flex flex-col">
            <div ref={containerRef} className="h-64">
              {/* Use the full component structure with the same class names */}
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
