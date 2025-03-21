"use client";

import { useEffect, useRef } from "react";
import ColourfulText from "./ui/colourful-text";

const processSteps = [
  {
    number: "01",
    title: "Step 1 - Phone Placement",
    description:
      "Upon entering the phone-free zone, your phone will be placed inside your Fika case",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Phone placement in Fika case",
  },
  {
    number: "02",
    title: "Step 2 - Secure Locking ",
    description:
      "Once inside the phone-free zone, the case is locked. You will always maintain possession of your phone. ",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Secure case locking",
  },
  {
    number: "03",
    title: "Step 3 - Unlocking & Returns",
    description:
      "To use your phone at any time, step outside the phone-free zone and tap your case on an Fika unlocking base",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Unlocking the Fika case",
  },
];

export function HowItWorksComponent() {
  const dotsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!dotsRef.current) return;

    const circles = dotsRef.current.querySelectorAll("circle");

    circles.forEach((circle, index) => {
      circle.setAttribute("style", `animation-delay: ${(index % 16) * 0.1}s`);
    });

    const circles2 = dotsRef.current.querySelectorAll('circle[data-wave="2"]');

    circles2.forEach((circle, index) => {
      circle.setAttribute("style", `animation-delay: ${(index % 12) * 0.15}s`);
    });
  }, []);

  return (
    <section className="pb-16 pt-36 md:pb-24 md:pt-34 bg-black border-b border-[#333333] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            The
            <ColourfulText text=" Fika Case" /> in{" "}
            <em className="font-light not-italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Action
            </em>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            We find that great things happen when we partner together and become
            co-collaborators on your charity journey. This is the process that
            has worked time and again for us and the charities we help.
          </p>
        </div>

        <div className="relative">
          {/* Animated wave dotted line background - only visible on desktop */}
          <div className="absolute w-full mt-[70px] md:mt-[85px] hidden md:block">
            <svg
              ref={dotsRef}
              className="w-full h-16 overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="pattern-1"
                  x="0"
                  y="0"
                  width="320"
                  height="34"
                  patternUnits="userSpaceOnUse"
                >
                  {[...Array(16)].map((_, i) => (
                    <circle
                      key={i}
                      r="1.5"
                      cy="2"
                      cx={10 + i * 20}
                      fill="white"
                      opacity="0.4"
                      className="animate-wave-dots"
                    />
                  ))}
                </pattern>
                <pattern
                  id="pattern-2"
                  x="0"
                  y="10"
                  width="240"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  {[...Array(12)].map((_, i) => (
                    <circle
                      key={i}
                      r="1.5"
                      cy="2"
                      cx={2 + i * 20}
                      fill="white"
                      data-wave="2"
                      className="animate-wave-dots"
                    />
                  ))}
                </pattern>
              </defs>
              <rect
                fill="url(#pattern-1)"
                width="100%"
                height="34"
                className="animate-wave"
              />
              <rect
                fill="url(#pattern-2)"
                width="100%"
                height="14"
                y="10"
                className="animate-wave-reverse"
              />
            </svg>
          </div>

          {/* Process steps - Vertical on mobile, horizontal on desktop */}
          <div className="space-y-12 md:space-y-0 md:flex md:gap-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="md:w-1/3 transition-all duration-500 ease-out"
                style={{
                  opacity: 0,
                  animation: "fadeIn 0.8s ease-out forwards",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8">
                  <div className="relative h-[200px] md:h-[300px] md:row-span-3 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-2 md:col-start-2 space-y-4">
                    <span className="text-5xl md:text-7xl font-light text-white block mb-4 pt-2 opacity-80">
                      {step.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-light text-white">
                      {step.title}
                    </h2>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(3px); }
          75% { transform: translateY(-2px); }
        }

        @keyframes wave-reverse {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-3px); }
          75% { transform: translateY(2px); }
        }

        @keyframes wave-dots {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 0.9; transform: translateY(3px); }
        }

        .animate-wave {
          animation: wave 4s linear infinite;
        }

        .animate-wave-reverse {
          animation: wave-reverse 4s ease-in infinite;
        }

        .animate-wave-dots {
          animation: wave-dots 3s linear infinite;
        }
        `}
      </style>
    </section>
  );
}