"use client";

import { useEffect, useRef } from "react";
import ColourfulText from "./ui/colourful-text";
import { Timeline } from "./ui/timeline";

const processSteps = [
  {
    number: "Step 1",
    title: "Phone Placement",
    description:
      "Upon entering the phone-free zone, your phone will be placed inside your Fika case",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Phone placement in Fika case",
  },
  {
    number: "Step 2",
    title: "Secure Locking ",
    description:
      "Once inside the phone-free zone, the case is locked. You will always maintain possession of your phone. ",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Secure case locking",
  },
  {
    number: "Step 3",
    title: "Unlocking & Returns",
    description:
      "To use your phone at any time, step outside the phone-free zone and tap your case on an Fika unlocking base",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Unlocking the Fika case",
  },
];

// Transform processSteps into the format expected by the Timeline component
const timelineData = processSteps.map((step) => ({
  title: step.number,
  content: (
    <div className=" p-6 rounded-2xl text-white mb-10">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {step.title}
          </h2>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  ),
}));

export function HowItWorksComponent() {
  return (
    <section className="pb-16 pt-36 md:pb-24 md:pt-34 bg-black border-b border-[#333333] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            The
            <span className="text-[#FF9900] font-light">
              <img
                src="logoOrange.png"
                alt="Fika Orange Logo"
                className="inline h-[1em] mx-2 align-middle translate-y-[-8px]"
              />
              Case
            </span>{" "}
            in{" "}
            <em className="font-light not-italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Action
            </em>
          </h1>
        </div>

        <div className="relative">
          {/* Timeline component instead of animated dotted lines */}
          <Timeline data={timelineData} />
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </section>
  );
}
